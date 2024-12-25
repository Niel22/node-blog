require('dotenv').config();

const express = require('express');
const app = express();
const expressLayout = require('express-ejs-layouts');
const router = require('./routes/router');

const database = require('./app/config/database');

app.use(express.static('public/assets'));

// db
database.connect();

// Templating engine
app.use(expressLayout);
app.set('layout', './layouts/app');
app.set('view engine', 'ejs');



const port = process.env.PORT || 4000;

app.use("", router);

app.listen(port, () => {
    console.log(`App Listening on port ${port}`);
});

