const express = require('express');
const morgan = require('morgan');
const path = require("path");
const db = require('./models');
const mongoose = require('mongoose');


const PORT = process.env.PORT || 3001;

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./controllers/api.js"));
app.use(require("./controllers/home-routes.js"));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }
)

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

module.exports = db;