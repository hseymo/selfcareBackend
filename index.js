const express = require('express');
const allRoutes = require('./controllers');
const sequelize = require('./config/connection');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const {User} = require('./models');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin:"https://selfcarecentral.herokuapp.com/"
}));

// Static directory
app.use(express.static('public'));

app.use('/',allRoutes);

sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
    });
});