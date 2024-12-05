const path = require("path");
const os = require("os");
// console.log(__dirname);
// console.log(__filename);

// const filePath = path.join("folders", "students", "data.txt");

// console.log(filePath);

// const parseData = path.parse(filePath);
// const resolvedPath = path.resolve(filePath);
// const extname = path.extname(filePath);
// const basename = path.basename(filePath);
// const dirname = path.dirname(filePath);

// console.log({parseData,resolvedPath,extname,basename,dirname});

console.log("Platform", os.platform());
console.log("User", os.userInfo());

console.log("CPU Architecture", os.arch());

console.log("Free Memory", os.freemem());

console.log("Total Memory", os.totalmem());

console.log("System Uptime", os.uptime());

console.log("Home Directory", os.homedir());

console.log("CPU Info", os.cpus());

console.log("User", os.endianness());
