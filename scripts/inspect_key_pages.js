const fs = require('fs');
const path = require('path');

const allPages = JSON.parse(fs.readFileSync(path.join(__dirname, 'all_pages_data.json')));

// Let's inspect some key pages
const keyPages = [
  'https://jhmcri.com/clinical-material/',
  'https://jhmcri.com/bed-distribution/',
  'https://jhmcri.com/bank-details/',
  'https://jhmcri.com/contact/',
  'https://jhmcri.com/our-dr-department/',
  'https://jhmcri.com/about-jakir-hossain-medical-college/',
  'https://jhmcri.com/chairman-message-jakir-hossain-medical-college/',
  'https://jhmcri.com/president-message-jakir-hossain-medical-college/',
  'https://jhmcri.com/principal-message-jhmcri/',
  'https://jhmcri.com/superintendents-message/',
  'https://jhmcri.com/governance-committees/',
  'https://jhmcri.com/facilities/',
  'https://jhmcri.com/health-care-facility/',
  'https://jhmcri.com/grievance-cell/',
  'https://jhmcri.com/scholarships-education-loan/',
  'https://jhmcri.com/hostel-facilities/',
  'https://jhmcri.com/mbbs-admission-2026-process/',
  'https://jhmcri.com/govt-approval/',
  'https://jhmcri.com/holiday-list-2026/',
  'https://jhmcri.com/career/'
];

keyPages.forEach(url => {
  const p = allPages[url];
  if (p) {
    console.log("=== " + url + " ===");
    console.log("Title:", p.title);
    console.log("Text sample:", p.text.substring(0, 300));
    if (p.tables && p.tables.length) {
      console.log("Tables count:", p.tables.length);
      console.log("First table sample:", JSON.stringify(p.tables[0].slice(0, 4)));
    }
  }
});
