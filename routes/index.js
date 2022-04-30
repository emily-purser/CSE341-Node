const routes = require('express').Router();

// routes.get('/', (req, res) =>{
//     res.send('Kelli Purser');
// });

routes.use('/contacts', require ('./contacts'));
module.exports = routes;
