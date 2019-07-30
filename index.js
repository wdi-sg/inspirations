const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');


/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

 const configs = {
  user: 'mohammadasshikin',
  host: '127.0.0.1',
  database: 'tunr_db',
  port: 5432
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

// Init express app
const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


// Set up middleware
app.use(methodOverride('_method'));

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);



/**
 * ===================================
 * ===================================
 *                function
 * ===================================
 * ===================================
 */



var quote = (request, response)=>{
    console.log(request.body.input);
    // console.log('inside the quote function')
    let query = 'insert into quotes (quote) values($1)';
    let values = [request.body.input];
    pool.query(query,values,(error,result)=>{
        if (error){
            console.log('error',err.stack)
            response.send('error')
        }
        else{
            console.log(result.rows);
        }
    })
}

var home = (request,response)=>{
    // response.send("HaRLOWW");
    response.render('home');
}

/**
 * ===================================
 * ===================================
 * Routes
 * ===================================
 * ===================================
 */

// get the thing that contains all the routes
app.post('/home',quote);
app.get('/home',home);

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const PORT = process.env.PORT || 3003;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));