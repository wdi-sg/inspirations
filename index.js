const express = require('express');
const app = express();

const pg = require('pg');

// Initialise postgres client
const config = {
  user: 'admin',
  host: '127.0.0.1',
  database: 'testdb',
  port: 5432,
};

const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



//************************************
//************************************



app.post('/', (request, response) => {
  let query = "INSERT INTO quotes (quote) values ($1)";
  const values = [request.body.quote];

  pool.query(query, values, (queryError, result)=>{

    if( queryError ){
      response.send("query error");
    }else{
      console.log( result.rows );

      const data = {
        quote : result.rows
      };
      response.json(data);
    }
  })
});

app.get('/', (request, response) => {
    let query = "SELECT * from quotes order by id desc";

    pool.query(query, (queryError, result)=>{

        if( queryError ){
          response.send("query error");
        }else{
            const data = {
                quote : result.rows
            };

            response.render('home', data);
        }
    });
});








// app.get('/stuff', (request, response) => {

//   console.log('yes!');
//   response.render('stuff');
// });



// app.get('/students/:id', (request, response) => {

//   let query = "SELECT * FROM students WHERE id=$1";
//   const values = [request.params.id];

//   pool.query(query, values, (queryError, result)=>{

//     if( queryError ){
//       response.send("query error");
//     }else{
//       console.log( result.rows );

//       const data = {
//         students : result.rows
//       };
//       response.json(data);
//     }
//   })
// });





const PORT = 3000;
console.log("start listening: "+PORT);
app.listen(PORT, ()=>{console.log("NOW LISTENING");});
console.log("now we are listening");