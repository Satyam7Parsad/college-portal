const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 8888;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './dashboard.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Server error: ' + error.code);
            }
        } else {
            res.writeHead(200, {
                'Content-Type': contentType,
                'Access-Control-Allow-Origin': '*'
            });
            res.end(content, 'utf-8');
        }
    });
});

server.listen(port, '0.0.0.0', () => {
    console.log(`🚀 EduHub Student Portal server running at:`);
    console.log(`📱 Local: http://localhost:${port}`);
    console.log(`🌐 Network: http://YOUR_LOCAL_IP:${port}`);
    console.log(`\n📋 To access on your phone:`);
    console.log(`1. Make sure your phone and computer are on the same WiFi network`);
    console.log(`2. Find your computer's IP address and replace YOUR_LOCAL_IP above`);
    console.log(`3. Open the network URL on your phone's browser`);
});