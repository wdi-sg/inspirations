const express = require('express');
const app = express();
const reactEngine = require('express-react-views').createEngine();
const pg = require('pg');
var cookieParser = require('cookie-parser')



// Initialise postgres client
const config = {
  user: 'marcus',
  host: '127.0.0.1',
  database: 'inspirations',
  port: 5432,
};
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static(__dirname+'/public/'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(cookieParser())
const pool = new pg.Pool(config);
pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});


app.get('/', (request, response) => {
  console.log(request.cookies)
  var dataSet={
    cookies:request.cookies
  }
  response.render('home',dataSet);
});

app.get('/submit', (request, response) => {
  let query = 'SELECT users.user_name, quotes.quote FROM users INNER JOIN userquotes ON (users.id = userquotes.user_id) INNER JOIN quotes ON (quotes.id = userquotes.quote_id)'
  pool.query(query,(err, result) => {
  if (err) {
    response.send( 'query error' );
  } else {
    response.send(result.rows);
  }
  });
});

app.post('/submit', (request, response) => {
  console.log(request.body)
  var data = JSON.parse(request.body.input)
  let insert = 'INSERT INTO quotes (quote) VALUES ($1) RETURNING *'
  let value = [data.data]
  pool.query(insert,value,(err, result) => {
  if (err) {
    response.send( 'query error' );
  } else {
    if (data.un){
      let insert2 = 'INSERT INTO userquotes (user_id,quote_id) VALUES ($1,$2) RETURNING (SELECT user_name FROM users WHERE users.id=$1)'
      let values2 = [data.un,result.rows[0].id]
      pool.query(insert2,values2,(err2,result2)=>{
        if (err2){
          response.send( 'query error' );
        }else{
          var results = {
            result1: result.rows,
            result2: result2.rows
          }
          response.send(results)
        }
      })
    }else{
      response.send(result.rows)
    }
  }
  });
});

app.post('/login', (request, response) => {
  var data = JSON.parse(request.body.data)
  console.log(data)
  let query = 'SELECT * FROM users WHERE user_name='+"'"+data+"'";
  pool.query(query,(err, result) => {
  if (err) {
    response.send( 'query error' );
  } else {
    response.send(result.rows);
  }
  });
});


app.listen(3000, ()=>{
  console.log("HEYA!")
})
