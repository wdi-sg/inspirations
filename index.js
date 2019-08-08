console.log("Its an Inspiration!!!");
const express = require('express');
const pg = require('pg');

// Initialise postgres client
const configs = {
  user: 'malcolmlow',
  host: '127.0.0.1',
  database: 'insp_db',
  port: 5432,
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

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

app.use(express.static(__dirname + '/public'));

/**
 * ===================================
 * Routes
 * ===================================
 */

 // ===================================

// The index feature (Deliverable)
app.get('/', (request, response) => {
    response.render('home');
});

app.post('/',(request,response)=>{
    console.log(request.body.data);
    let queryText = 'INSERT INTO quotes (quote) VALUES ($1) RETURNING *';
    let values = [request.body.data];
    pool.query(queryText, values, (error, result)=>{
        if (error) {
            console.log(error)
        } else {
            let data = {
              data : result.rows
            }
        response.json(data);
        }
    });
});

app.get('/hello', (request, response) => {
  console.log('waffles');
  response.render('hello');
})

app.get('/banana', (request, response) => {

  console.log('waffles');

  const data = {
    cucumber : "bacon",
    rice : "mango"
  };

  response.json(data);
});


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));

let onClose = function(){

  server.close(() => {
    console.log('Process terminated')
    allModels.pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);