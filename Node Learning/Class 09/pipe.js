const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);

});
// Set the server to listen on port 3000

server.listen(3000, () => {

    console.log(`Server is running on port 3000`);

});
