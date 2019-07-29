console.log("starting up!!");

const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');
//const cookieParser = require('cookie-parser')


//let sha256 = require('js-sha256');
//const SALT = "I love GA";

// Initialise postgres client
const configs = {
    user: 'donc',
    host: '127.0.0.1',
    database: 'inspirations_db',
    port: 5432,
    password: 'password'
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//app.use(cookieParser());
app.use(methodOverride('_method'));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Routes
 * ===================================
 */



app.post('/quotes', (request, response) => {

    console.log(request.body.quote);

    const queryString = "INSERT INTO quotes (quote) VALUES ($1) RETURNING *";

    const values = [request.body.quote];

    pool.query(queryString, values, (err, res) => {
        if (err) {
            console.log("query error", err.message);
        } else {
            console.log("YAY");
            console.log(res.rows[0] );
            let data = {
                quotesData : res.rows
            }

            response.json(data);
        }
    });
});


 //show all artists
app.get('/', (request, response) => {

    const queryString = 'SELECT * FROM quotes';
    pool.query(queryString, (err, res) => {
        if (err) {
            console.log("query error", err.message);
        } else {

            const data = {
                quotesData : res.rows
            }
            response.render('home', data);
        }
    });

});




/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const server = app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));

let onClose = function(){

  console.log("closing");

  server.close(() => {

    console.log('Process terminated');

    pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);