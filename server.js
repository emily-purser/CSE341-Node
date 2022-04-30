const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require("./db/connection");
const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json())
.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})
.use('/', require('./routes'));

// mongodb.connect();
// app.listen(port, () => {
//     console.log(`I'm listening to the port ${port}`);
// })
mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to DB and listening on ${port}`);
    }
});
