const fs = require('fs');

//Create
fs.writeFile('example.txt', 'Hello, this is a new file!', (err) => {
    if (err) {
        console.error('Error creating the file:', err);
    } else {
        console.log('File created successfully!');
    }
});

//Read

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
    } else {
        console.log('File contents:', data);
    }
});

//Update

fs.appendFile('example.txt', '\nThis is an appended line!', (err) => {
    if (err) {
        console.error('Error appending to the file:', err);
    } else {
        console.log('Appended text to the file successfully!');
    }
});

//Delete

fs.unlink('example.txt', (err) => {
    if (err) {
        console.error('Error deleting the file:', err);
    } else {
        console.log('File deleted successfully!');
    }
});
