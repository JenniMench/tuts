const http = require('http');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res)=> {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedUrl = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLocaleLowerCase();
    const queryStringObjects = parsedUrl.query;
    
    const handle = routes[trimmedUrl] ? routes[trimmedUrl][method] : false;
    if(handle) {
        handle(req, res, queryStringObjects);
    } else {
        res.end('');
    }
});

const routes = {
    'profile': {
        'get': (req, res, query) => {
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(200);
            const data = JSON.stringify({
                name: 'Snipress',
                age: 25,
                lastname: query.lastname,
            });
            res.end(data);
        },
        'post': (req, res) => res.end('im posting someting')
    },
    'cart': (req,res) => {
        res.end('y u look for cart??!!!');
    }
}

server.listen(PORT, () => {
    console.log('running at PORT', PORT);
});
