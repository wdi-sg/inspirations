const express = require('express');
const app = express();

const pg = require('pg');

// Initialise postgres client
const config = {
  user: 'aliciawong',
  host: '127.0.0.1',
  database: 'testdb',
  port: 5432,
};

const pool = new pg.Pool(config);

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

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.get('/', (request, response) => {
    console.log("redirecting");
    response.redirect("/quotes");
});

app.get('/quotes',(request, response)=>{

    let query = "select * from quotes";

    pool.query(query, (err, result) => {

        if (err) {
            console.error('query error:', err.stack);
            response.send( 'query error' );
        } else {
            console.log('query result:', result.rows);

            const data = {
                quotesList : result.rows
        };
        console.log(data);

        response.render('home', data);
        //response.send('OKKKKK works');
        }
    });
});


app.post('/quotes', (request, response) => {

    console.log('new quote submitted')
    console.log(request.body);

    let query = "INSERT INTO quotes (quote) VALUES ($1)";
    const values = [request.body.quote];

    pool.query(query, values, (queryError, result)=>{

        if( queryError ){
            response.send("query error");
        } else{
            console.log( result.rows );

            response.redirect("/quotes");
        }
    });
});


const PORT = 3000;
console.log("start listening: "+PORT);
app.listen(PORT, ()=>{console.log("now listening");});
console.log("now we are listening");