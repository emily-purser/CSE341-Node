
const routes = require('express').Router();

const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.allContacts);

routes.get('/:id', contactsController.oneContact);

routes.post('/', contactsController.createContact);

routes.delete('/:id', contactsController.deleteContact);

routes.put('/:id', contactsController.updateContact);

module.exports = routes;