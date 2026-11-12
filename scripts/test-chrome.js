const { execSync } = require('child_process');
const chrome = '\"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\"';
const out = execSync(`${chrome} --headless --version`);
console.log('Chrome:', out.toString().trim());

