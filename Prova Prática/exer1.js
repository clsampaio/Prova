const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    const pessoas = [
        { nu:18, nome: 'Maria'},
        { nu:18, nome: 'Lucas'},
        { nu:17, nome: 'Larissa'},
    ]
});

const json = JSON.stringify(pessoas);
console.log(json);