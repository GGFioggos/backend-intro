const express = require('express');
const app = express();
const path = require('path');

const port = 8000;

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '/about.html'));
});

app.get('/contact-me', function (req, res) {
    res.sendFile(path.join(__dirname, '/contact-me.html'));
});

app.get('*', function (req, res) {
    res.statusCode = 404;
    res.sendFile(path.join(__dirname, '/404.html'));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`);
});

/*
const handler = async (req, res) => {
    if (req.url === '/' || req.url === '/index.html') {
        const data = await readFile('./index.html', 'utf8');

        res.writeHeader(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    } else if (req.url === '/about' || req.url === '/about.html') {
        const data = await readFile('./about.html', 'utf8');

        res.writeHeader(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    } else if (req.url === '/contact-me' || req.url === '/contact-me.html') {
        const data = await readFile('./contact-me.html', 'utf8');

        res.writeHeader(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    } else {
        const data = await readFile('./404.html', 'utf8');
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    }
};
*/
