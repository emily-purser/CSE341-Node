const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

async function allContacts(req, res, next) {
    const result = await mongodb.getDb().db('cse341').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    })
}
async function oneContact(req, res, next) {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('cse341').collection('contacts').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    })
}

module.exports = {
    allContacts,
    oneContact
}