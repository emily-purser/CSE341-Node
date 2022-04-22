const routes = require('express').Router();

routes.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Kelli Purser');
});

module.exports = routes;
