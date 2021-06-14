const express = require('express');
const path = require('path');
const port = 8000;
const db = require('./config/mongoose');
const Contact = require('./models/contact');
const app = express();

app.use(express.urlencoded());

// Setting up the ejs as template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Print all the contacts
app.get('/', function(req, res){
    Contact.find({}, function(err, contacts){
        if(err){
            console.log('Error in finding the contacts');
            return;
        }
        return res.render('home', {
            title: 'Contact List',
            contacts: contacts
        });
    });
});

// Creating a contact
app.post('/create-contact', function(req, res){
    Contact.create(req.body, function(err, contact){
        if(err){
            console.log('Error in creating the contact');
            return;
        }
        return res.redirect('back');
    });
});

// Deleting a contact
app.get('/delete-contact', function(req, res){
    let id = req.query.id;
    Contact.findByIdAndDelete(id, function(err){
        if(err){
            console.log('Error in deleting a contact');
            return;
        }
        return res.redirect('back');
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