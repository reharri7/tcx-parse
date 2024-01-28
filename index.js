const parse = require('tcx');
const xmlDom = new (require('xmldom').DOMParser)();
const fs = require('fs');
// Enter your file name here
const fileName = './data/filename.tcx'
const xmlDomResult = xmlDom.parseFromString(fs.readFileSync(fileName, 'utf8'));
const result = parse(xmlDomResult);
console.log(result.features);
