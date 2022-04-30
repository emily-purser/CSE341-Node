
const routes = require('express').Router();

const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.allContacts);

routes.get('/:id', contactsController.oneContact);

module.exports = routes;