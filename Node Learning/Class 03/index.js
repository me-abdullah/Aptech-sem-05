const path = require("path");

console.log(__dirname);
console.log(__filename);

const filePath = path.join("folders", "students", "data.txt");

console.log(filePath);

const parseData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extname = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);

console.log({parseData,resolvedPath,extname,basename,dirname});
