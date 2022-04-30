// const MongoClient = require('mongodb');
// const dotenv = require('dotenv');

// dotenv.config();

// async function connect() {
//     const uri = process.env.DB_URI;

//     const client = new MongoClient(uri);

//     try {
//         await client.connect();
//     } catch (e) {
//         console.error(e);
//     }
    
// }

// async function getDb() {
//     return client;
// }

// // module.exports = {
// //     connect,
// //     getDb
// // }
// connect();
// getDb();
const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
  if (_db) {
    console.log('Db is already initialized!');
    return callback(null, _db);
  }
  MongoClient.connect(process.env.DB_URI)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};