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
  user: 'sam',
  host: '127.0.0.1',
  port: 5432,
  database: 'inspirations'
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

//////////////////////////////////////////////////////////////////////////////////////

// app.get('/hello', (request, response) => {
//   console.log('waffles');
//   response.render('home');
// })

app.get('/', (request, response) => {
    const queryText = 'SELECT * FROM quotes';
    pool.query(queryText, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            response.send( 'query error' );
        }
        else {
            var data = {
              quotes: result.rows
            }
            response.render('home',data);
        }
    })
})

app.post('/:message', (request, response) => {
    const queryText = `INSERT INTO quotes (quote) VALUES ($1)`;
    let values = [request.params.message]
    pool.query(queryText, values, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            response.send( 'query error' );
        }
    })
})


const port = 3000;
console.log("start listening");
app.listen(port)
console.log("done listening");