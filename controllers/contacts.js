//const { restart } = require('nodemon');
const mongodb = require('../db/connection');
const ObjectId = require('mongodb').ObjectId;

// Get all contacts
async function allContacts(req, res, next) {
    const result = await mongodb.getDb().db('cse341').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    })
}

// Get One Contact by id
async function oneContact(req, res) {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('cse341').collection('contacts').find({ _id: userId });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    })
}

//Delete One Contact by Id
async function deleteContact(req, res) {
    const userId = new ObjectId(req.params.id);
    try {
        const result = await mongodb.getDb().db('cse341').collection('contacts').remove({_id: userId}, true);
        res.status(200).json(result);
    }catch(err){
        res.status(500).json(err)
    }

}

// Create New Contact
async function createContact(req, res){
    const newContact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    try {
        const result = await mongodb.getDb().db('cse341').collection('contacts').insertOne(newContact);
        res.status(200).json(result);
    }catch(err){
        res.status(500).json(err);
    }
}

// Update a Contact
async function updateContact(req, res){
    const userId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    try {
        const result = await mongodb.getDb().db('cse341').collection('contacts').replaceOne({ _id: userId }, contact);
        res.status(200).send();
    }catch(err){
        res.status(500).json(err);
    }
}

module.exports = {
    allContacts,
    oneContact,
    createContact,
    deleteContact,
    updateContact
}