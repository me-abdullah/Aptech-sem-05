const http = require('http');
const fs = require('fs');

// Create an HTTP server

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>Hello Abdullah</h1>");
        res.end();
    }
    else if (req.url === "/about") {
        res.write("About Abdullah");
        res.end();
    }

    else if (req.url === "/userapi") {
        fs.readFile(`${__dirname}/jsonData/userAPI.json`, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("Internal Server Error");
            } else {
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(data);
            }
        });
    }

    else if (req.url === "/contact") {
        res.setHeader("Content-Type", "text/plain");
        res.write("Contact Abdullah");
        res.end();
    }
});

// Set the server to listen on port 3000

server.listen(3000, () => {

    console.log(`Server is running on port 3000`);

});