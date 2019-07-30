console.log("Let there be light");
const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');
const configs = {
  user: 'yoda14',
  host: '127.0.0.1',
  database: 'inspirations',
  port: 5432,
  password: 'Asecret1'
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

app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

app.use(express.static('public'));



app.get('/', (request, response) => {
    response.render('home');
});

app.get('/display', (request, response) => {
const queryString = 'SELECT * from quotes ORDER BY id ASC';

    pool.query(queryString, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            response.send( 'query error' );
        } else {
            let data = {
                quotesKey : result.rows
            };
            response.send(data);
  }
});
});




const server = app.listen(3000, () => console.log('~~~local host love you 3000~~~'));