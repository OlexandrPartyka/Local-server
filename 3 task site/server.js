const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello bibas and bobas im making all the works rn at night:)');
});

app.get('/html', (req, res) => {
    res.send('<h1>Hello bibas and bobas im making all the works rn at night :)</h1>');
});

app.get('/file', (req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            res.send('Error reading the file');
        } else {
            res.send(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});