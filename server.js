const express = require('express');
const hbs = require('hbs');


var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public')); //middle-ware

app.get('/', (req,res) => {
    // res.send('Hello Express!');
    res.send({
        name: 'James',
        likes: [
            'Biking',
            'Babes'
        ]
    });
});

app.get('/about', (req, res) => {
    // res.send('About Page');
    res.render('about.hbs', {
        pageTitle: 'Sample Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req,res) => {
    res.send({
        errorMessage:"Unable to handle request'"
    });
});

app.listen(3000, () =>{
    console.log("Server is up on Port:3000");
});