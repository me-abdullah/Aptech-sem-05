const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

    const rstream = fs.createReadStream("input.txt");

    rstream.on("data", (chunkData) => {
        res.write(chunkData);
    });
    rstream.on("end", () => {
        res.end();
    });

    rstream.on("error", (err) => {
        console.error(`Error reading file: ${err.message}`);
        res.end("File not found");
    });




});
// Set the server to listen on port 3000

server.listen(3000, () => {

    console.log(`Server is running on port 3000`);

});
