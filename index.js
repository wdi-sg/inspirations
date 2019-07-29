const express = require('express');

const app = express();


// database stuff
const pg = require('pg');

// Initialise postgres client
const config = {
  user: 'wilfredloh',
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


////////////////////////////////////////////////////////////////////////
//                       ROUTES HERE                                //
////////////////////////////////////////////////////////////////////////

//                  ROUTE TO
app.get('/banana', (request, response) => {

  const data = {
    cucumber : "bacon",
    rice : "mango"
  };
  response.send(data);
});

//                  ROUTE TO
app.get('/quotes', (request, response) => {

  let query = "SELECT * FROM quotes";
  // const values = [request.params.id];

  pool.query(query, (queryError, result)=>{
    if( queryError ){
      response.send("query error");
    }else{
      const data = {
        quotes : result.rows
      };
      response.render('home', data);
    }
  })
});

//                  ROUTE TO
app.get('/quotes/:id', (request, response) => {

  let query = `SELECT * FROM quotes where id = $1`;
  let values = [request.params.id];

  pool.query(query, values, (queryError, result)=>{
    if( queryError ){
      response.send("query error");
    }else{
      const data = {
        user : result.rows
      };

      console.log(data)
      response.json(data);
      // response.send('hello');

    }
  })
});


//                  ROUTE TO
app.post('/quotes', (request, response) => {

    let query = `INSERT INTO quotes (quote) VALUES ($1) RETURNING *`;
    let values = [request.body.data];

    pool.query(query, values, (queryError, result)=>{
        if( queryError ){
            response.send("query error");
        }else{
            console.log( 'result.rows',result.rows[0] );
            const data = {
            quotes : result.rows[0]
            };
            console.log('dataaaaaaa:', data)
            // is this sent back to the AJAX POST as a responseText?

            response.send(data);
        }
    })

  // console.log( request.body );
  // response.clearCookie('name')
  // response.send("success!!!");
})



////////////////////////////////////////////////////////////////////////
//                  PORTS
////////////////////////////////////////////////////////////////////////

const port = 3030;
app.listen(port)