const routes = require('express').Router();

routes.get('/', (req, res) =>{
    res.send('Kelli Purser');
});

module.exports = routes;
