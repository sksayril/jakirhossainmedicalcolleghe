const fs = require('fs');
const path = require('path');

const allPages = JSON.parse(fs.readFileSync(path.join(__dirname, 'all_pages_data.json')));

console.log("Pages scraped count:", Object.keys(allPages).length);

// Let's print out the titles and urls
Object.entries(allPages).forEach(([url, data]) => {
  console.log(`URL: ${url} | Title: ${data.title} | Headings: ${data.headings.length} | Tables: ${data.tables.length}`);
});
