const express = require('express');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV !== 'prod') {
  require('dotenv').load();
}

// create express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`)
.then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    res.send("THIS IS WHERE THE TEMPLATE GOES...");
});

require('./api/routes.js')(app);

// listen for requests
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Web server listening on: ${port}`);
});
