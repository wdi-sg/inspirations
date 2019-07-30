
/////SETUP COMPLETE/////

console.log("about to require express");
const express = require('express');

const app = express();
console.log("done creating app");

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

app.use(express.static('public'))

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

// Initialise postgres client
const pg = require('pg');

const configs = {
  user: 'nuraqilahrajab',
  password:'sly123',
  host: '127.0.0.1',
  port: 5432,
  database: 'inspirations',
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


///RENDER THE HOME PAGE TO TYPE IN THE QUOTE

app.get('/', (request, response) => {

    const queryString = 'SELECT * FROM quotes ORDER BY id ASC';
    pool.query(queryString, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            response.send('query error');
        }//if CT
        else {
            response.render('home', result);
        }//else CT
    })//pool.queryCT
});//app.get CT

//POST THE QUOTE
app.post('/quotes/:message', (request, response) => {

    const queryString = 'INSERT INTO quotes VALUES $1';
    let values = [request.params.message];
    console.log(request.params.message);

    pool.query(queryString, values, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            response.send('Unable to post quote');
        }//if CT
    })//pool.query CT
});//app.post CT


///SETUP PORT
const port = 3000;
console.log("start listening");
app.listen(port)
console.log("done listening");