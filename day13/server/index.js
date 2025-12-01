import http from 'node:http';
import path from 'node:path';
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req)

    const parseUrl = new URL(req.url, `http://${req.headers.host}`);
    const { pathname, searchParams } = parseUrl;
    
    console.log(parseUrl)
    console.log(pathname)
    console.log(searchParams)
     if(pathname === '/hi'){


    res.writeHead(200);
    res.end("hi~ i'm Hong seong il");   
    }
   
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);