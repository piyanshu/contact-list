const express = require('express');
const db = require('./config/mongoose');
const path = require('path');
const port = 7000;
const app = express();

// Setting up the ejs as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    return res.render('home', {
        title : 'Contact List'
    });
});

// Checking server is proper running or not
app.listen(port, function(err){
    if(err){ 
        console.log('Error in running the server');
        return;
    }
    console.log('Server is up and running on port: ', port);
});