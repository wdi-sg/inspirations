const express = require('express');
const app = express();
const pg = require('pg');

// Initialise postgres client
const config = {
  user: 'postgres',
  password: 'passfoot',
  host: '127.0.0.1',
  database: 'quotes',
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

//////////////////////////////////////////////
////////////////////ROUTES////////////////////
//////////////////////////////////////////////


app.get('/inspirations',(request, response)=> {

  // const queryString = "INSERT INTO dogs (name, owner_id) VALUES ('fido', 1) RETURNING *";
  const queryString = "SELECT * FROM quotes";

  pool.query(queryString, (err, result) => {

    if (err) {
      console.log('query error:', err.stack);
      response.send( 'query error' );
    } else {

        const data = {
            quotes : result.rows
            }

        console.log(data)

            // response.json(data);
            response.render('home', data);
        }
  });
});


app.post('/inspirations',(request, response)=> {

      console.log(request.body);
  // const queryString = "INSERT INTO dogs (name, owner_id) VALUES ('fido', 1) RETURNING *";
  const queryString = "INSERT * INTO quotes VALUES ($ $";

  pool.query(queryString, (err, result) => {

    if (err) {
      console.log('query error:', err.stack);
      response.send( 'query error' );
    } else {

        const data = {
            quotes : result.rows
            }

        console.log(data)

            // response.json(data);
            response.render('home', data);
        }
  });
});

// app.get('/inspirations/quotes',(request, response)=> {

//   // const queryString = "INSERT INTO dogs (name, owner_id) VALUES ('fido', 1) RETURNING *";
//   const queryString = "SELECT * FROM quotes";

//   pool.query(queryString, (err, result) => {

//     if (err) {
//       console.log('query error:', err.stack);
//       response.send( 'query error' );
//     } else {

//         const data = {
//             quotes : result.rows
//             }

//             response.json(data);
//         }
//   });
// });

const PORT = 3000;
console.log("start listening: "+PORT);
app.listen(PORT, ()=>{console.log("NOW LISTENEING");});
console.log("now we are listening");