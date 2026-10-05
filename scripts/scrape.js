const https = require('https');
const fs = require('fs');
const path = require('path');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function main() {
  console.log('Fetching homepage...');
  const html = await fetchUrl('https://jhmcri.com/');
  fs.writeFileSync(path.join(__dirname, 'home.html'), html);

  // Extract navigation links
  const linkMatches = html.match(/href="([^"]+)"/g) || [];
  const links = new Set();
  linkMatches.forEach(m => {
    const raw = m.replace(/^href="/, '').replace(/"$/, '');
    if (raw.includes('jhmcri.com') || raw.startsWith('/')) {
      links.add(raw);
    }
  });

  // Extract images
  const imgMatches = html.match(/src="([^"]+)"/g) || [];
  const images = new Set();
  imgMatches.forEach(m => {
    const raw = m.replace(/^src="/, '').replace(/"$/, '');
    if (raw.match(/\.(jpg|jpeg|png|webp|svg|gif)(\?.*)?$/i)) {
      images.add(raw);
    }
  });

  // Also check background images
  const bgMatches = html.match(/url\(['"]?([^'"\)]+)['"]?\)/g) || [];
  bgMatches.forEach(m => {
    const raw = m.replace(/^url\(['"]?/, '').replace(/['"]?\)$/, '');
    if (raw.match(/\.(jpg|jpeg|png|webp|svg|gif)/i)) {
      images.add(raw);
    }
  });

  const report = {
    links: Array.from(links),
    images: Array.from(images)
  };

  fs.writeFileSync(path.join(__dirname, 'crawl_summary.json'), JSON.stringify(report, null, 2));
  console.log(`Found ${report.links.length} links and ${report.images.length} images.`);
}

main().catch(console.error);
