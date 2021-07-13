const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Static content
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        name: 'Luis Polanco',
        title: 'Web server project'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        name: 'Luis Polanco',
        title: 'Web server project'
    });
});


app.get('/elements', (req, res) => {
    res.render('elements', {
        name: 'Luis Polanco',
        title: 'Web server project'
    });
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});