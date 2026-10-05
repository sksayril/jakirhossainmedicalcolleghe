const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let redirectUrl = res.headers.location;
        if (!redirectUrl.startsWith('http')) {
          redirectUrl = 'https://jhmcri.com' + redirectUrl;
        }
        return fetchUrl(redirectUrl).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function stripHtml(html) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8211;/g, '-')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#038;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

async function scrapeAll() {
  const crawlSummary = JSON.parse(fs.readFileSync(path.join(__dirname, 'crawl_summary.json')));
  const links = crawlSummary.links.filter(l => 
    l.startsWith('http') && 
    !l.includes('/feed/') && 
    !l.includes('wp-json') && 
    !l.includes('xmlrpc') &&
    !l.includes('mailto:')
  );

  const pageData = {};
  const allImages = new Set(crawlSummary.images);

  for (const url of links) {
    try {
      console.log(`Fetching: ${url}`);
      const html = await fetchUrl(url);
      
      // Extract title
      const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1].replace(' - Jakir Hossain Medical College', '').trim() : '';

      // Extract main content from entry-content or body
      let contentHtml = '';
      const entryMatch = html.match(/<div[^>]*class="[^"]*entry-content[^"]*"[^>]*>([\s\S]*?)<\/div>\s*<!-- \.entry-content -->/i)
        || html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)
        || html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);

      if (entryMatch) {
        contentHtml = entryMatch[1];
      } else {
        contentHtml = html;
      }

      // Collect any more images
      const imgMatches = html.match(/src="([^"]+)"/g) || [];
      imgMatches.forEach(m => {
        const raw = m.replace(/^src="/, '').replace(/"$/, '');
        if (raw.match(/\.(jpg|jpeg|png|webp|svg|gif)(\?.*)?$/i)) {
          allImages.add(raw);
        }
      });

      // Extract headings
      const headings = [];
      const hMatches = contentHtml.match(/<h[1-4][^>]*>(.*?)<\/h[1-4]>/gi) || [];
      hMatches.forEach(h => {
        headings.push(stripHtml(h));
      });

      // Extract tables
      const tables = [];
      const tableMatches = contentHtml.match(/<table[^>]*>([\s\S]*?)<\/table>/gi) || [];
      tableMatches.forEach(tbl => {
        const rows = [];
        const trMatches = tbl.match(/<tr[^>]*>([\s\S]*?)<\/tr>/gi) || [];
        trMatches.forEach(tr => {
          const cells = [];
          const cellMatches = tr.match(/<(th|td)[^>]*>([\s\S]*?)<\/(th|td)>/gi) || [];
          cellMatches.forEach(c => cells.push(stripHtml(c)));
          if (cells.length) rows.push(cells);
        });
        if (rows.length) tables.push(rows);
      });

      const cleanText = stripHtml(contentHtml);

      pageData[url] = {
        url,
        title,
        headings,
        tables,
        text: cleanText.substring(0, 5000), // first 5000 chars
        rawContentSample: cleanText
      };
    } catch (e) {
      console.error(`Error on ${url}:`, e.message);
    }
  }

  fs.writeFileSync(path.join(__dirname, 'all_pages_data.json'), JSON.stringify(pageData, null, 2));
  fs.writeFileSync(path.join(__dirname, 'all_images.json'), JSON.stringify(Array.from(allImages), null, 2));
  console.log('Crawled all pages successfully. Total pages:', Object.keys(pageData).length, 'Total images:', allImages.size);
}

scrapeAll().catch(console.error);
