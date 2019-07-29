console.log("about to require express");
const express = require('express');
const pg = require('pg');

// Initialise postgres client
const configs = {
  user: 'caspianzx',
  host: '127.0.0.1',
  database: 'quotes',
  port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

const app = express();
console.log("done creating app");

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


//////////////////////////////////////////////



app.get('/', (request, response) => {
  console.log('it works');
  response.render('home');
})


app.get('/ajax', (request, response) => {
    console.log('waffles');
    //pool query to database here
    const quotesQuery = 'SELECT * FROM quotes';
    pool.query(quotesQuery, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            response.send( 'query error' );
        } else {
            var data = {quotes: result.rows};
        }
        console.log (data);
        response.send(data);
    });
});



// post listening
const port = 3000;
console.log("start listening to:~~~~~~~~~~~~~"+port);
app.listen(port)
console.log("done listening");