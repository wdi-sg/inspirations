console.log("starting up!!");

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');

const configs = {
  user: 'KWAN',
  host: '127.0.0.1',
  database: 'keithquotes',
  port: 5432,
};

const pool = new pg.Pool(configs);

const app = express();

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Home Route
 * ===================================
 */

app.get('/', (request, response) => {
  // query database for all pokemon
  // const queryString = 'SELECT * from quotes ORDER BY id';

  // pool.query(queryString, (err, result) => {

  // if (err) {
  //   console.error('query error:', err.stack);
  //   response.send( 'query error' );
  // } else {
  //   console.log('query result:', result);

  //   let data = {
  //       quotes: result.rows
  //   }

    // redirect to home page

    response.render('home');

    }
);
// });

/**
 * ===================================
 * Input Form Route
 * ===================================
 */

app.get('/new', (request, response) => {

    response.render('newquote');
});

app.post('/newquote', (request, response) => {

    const queryString = "INSERT INTO quotes (quotes) VALUES ($1)";

    const VALUES = [request.body.quotes];

    pool.query(queryString, VALUES, (err, result) => {

      if (err) {
        console.error('query error:', err.stack);
        response.send( 'query error' );
        } else {

            response.redirect('/');
        }
    });
});

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const server = app.listen(3001, () => console.log('~~~ Tuning in to the waves of port 3001 ~~~'));

let onClose = function(){

  console.log("closing");

  server.close(() => {

    console.log('Process terminated');

    pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);