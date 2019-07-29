console.log("about to require express");
const express = require('express');

const pg = require('pg');

const app = express();
console.log("done creating app");

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


const configs = {
    user: 'mhafiz',
    host: '127.0.0.1',
    database: 'quotes_db',
    password:'popo25',
    port: 5432
};

const pool = new pg.Pool(configs);
pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

app.get('/', (request, response) => {

  response.render('home');
})
app.post('/', (request, response) => {
    let query = 'INSERT INTO quotes (quote) VALUES($1) RETURNING *';
    let values= [request.body.quote];
    console.log(request.body);
    pool.query(query,values,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            let data = {
                data : result.rows
            };
            response.json(data);
        }
    });
})

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