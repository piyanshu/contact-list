const express = require('express');
const path = require('path');
const port = 7000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
    return res.render('home', {
        title : 'Contact List'
    });
    // return res.end('Gotcha!');
});

app.listen(port, function(err){
    if(err){ 
        console.log('Error in running the server');
        return;
    }
    console.log('Server is up and running on port: ', port);
});