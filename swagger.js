const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Contacts API'
    },
    host: 'cse341-emily-purser.herokuapp.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpoint = ['./routes/index.js'];

swaggerAutogen(outputFile, endpoint, doc);