console.log("about to require express");
const express = require('express');
const pg = require('pg');

const configs = {
    user: 'xxx',
    password:'xxx',
    host: 'localhost',
    database: 'inspirations',
    port: 5432
};
const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(express.static('public'))
// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

app.get('/', (request, response) => {
    const queryString = 'SELECT * from quotes ORDER BY id ASC';
 
    pool.query(queryString, (err, result) => {
      if (err) {
        console.error('query error:', err.stack);
        response.send( 'query error' );
      } else {
        response.render('index', result);
      }
    });

})

app.post('/quotes/:message', (request, response) => {
    console.log(request.params.message);
    let data = {
        id:request.params.message
    };
    const queryString = `INSERT INTO quotes (quote) VALUES ('${request.params.message}')`;
    pool.query(queryString, (err, result) => {
      if (err) {
        console.error('query error:', err.stack);
        response.send( 'query error' );
      }
    });
});

app.get('/quotes/:message', (request, response) => {
    console.log(request.params.message);
    let data = {
        id:request.params.message
    };
    console.log(data);
    response.send(data);
});



const port = 3000;
console.log(">>>>> >>>>> >>>>> start listening on port: "+port);
app.listen(port);