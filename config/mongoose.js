// require mongoose
const mongoose = require('mongoose');

// connect mongoose with mongodb
mongoose.connect('mongodb://localhost/contact_list_db');

// accessing the connection between 
const db = mongoose.connection;

// Checking if there is any error on connecting with db
db.on('error', console.error.bind, 'error in connecting to the db');

// Successfully connected
db.once('open', function(){
    console.log('successfully connected to the db');
});