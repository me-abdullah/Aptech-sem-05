const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
if (req.url === "/" || req.url === "/home") {
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
}
else if (req.url === "/about") {
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
}
else if (req.url === "/services") {
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/services.html').pipe(res);
}
else if (req.url === "/contact") {
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
}
else{
    res.writeHead(404,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
}
});


server.listen(3000, () => {
    console.log("server is running on port 3000");
})