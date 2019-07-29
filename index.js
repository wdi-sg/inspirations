console.log("about to require express");
const express = require('express');

const app = express();
console.log("done creating app");

const pg = require('pg');

// Initialise postgres client
const config = {
  user: 'yixin',
  host: '127.0.0.1',
  database: 'inspirations',
  port: 5432,
};

const pool = new pg.Pool(config);


// add these two lines
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));


pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});


// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

app.use(express.static('public'))


app.get('/', (request, response) => {

  const queryString = "SELECT * FROM quotes";

  pool.query(queryString, (err, result) => {

    if (err) {
      console.log('query error:', err.stack);
      response.send(err)
    } else {
      var data = {
        quotes : result.rows
      }
      response.render('home', data);;
    }

  });

});

app.post('/quote', (request, response) => {
  console.log("LIKEEEEEE")
  var input = request.body;
  console.log(input);
  const queryString = "INSERT INTO quotes (quote) VALUES ($1) ";
  const values = [input.quote];

  pool.query(queryString, values, (err, result) => {

    if (err) {
      console.log('query error:', err.stack);
      response.send(err)
    } else {
      console.log('success');
      response.redirect('/');
    }

  });

});

const port = 3000;
console.log("start listening");
app.listen(port)
console.log("done listening");
