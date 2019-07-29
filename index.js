const express = require('express');
const app = express();

const pg = require('pg');

// Initialise postgres client
const config = {
  user: 'hilmijohari',
  host: '127.0.0.1',
  database: 'hilmijohari',
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


// this line allows us to use CSS and JS files in the public folder
app.use(express.static('public'))


/*
   *  =========================================
   *  =========================================
   *    ALL ROUTES
   *  =========================================
   *  =========================================
*/

app.get('/', (request, response) => {

  response.render('home')

});

app.post('/quotes', (request, response) => {
  response.send('this is where you insert into table')
});









app.get('/apple', (request, response) => {
  response.type('text/css').send('body{ font-style: italic; }');
});

app.get('/stuff/:id', (request, response) => {
    let id = request.params.id;
  // console.log( window.location );
  // console.log( process.argv );
  console.log('yes!');
  response.render('stuff', {id: id});
});

app.get('/students/:id', (request, response) => {

  let query = "SELECT * FROM students WHERE id=$1";
  const values = [request.params.id];

  pool.query(query, values, (queryError, result)=>{

    if( queryError ){
      response.send("query error");
    }else{
      console.log( result.rows );

      const data = {
        students : result.rows
      };

      response.json(data);
    }


  })

});



app.get('/banana',(request, response)=>{

  // const queryString = "INSERT INTO dogs (name, owner_id) VALUES ('fido', 1) RETURNING *";
  const queryString = "SELECT * FROM students";

  pool.query(queryString, (err, result) => {

    if (err) {
      console.log('query error:', err.stack);
      response.send( 'query error' );
    } else {
      // console.log('query result:', result);

      console.log("~~~~~~~~~~~~ its a date object:");
      // console.log( result.rows[0].date_col.getFullYear() );
      console.log( result.rows );

      // const data = {
      //   students : result.rows
      // }

      // response.render('home', data)

      response.send( result.rows );
      // redirect to home page
      // response.send( result.rows );
    }
  });


  // response.send("helloooooo");
});


app.post('/what', (request, response) => {
  // console.log( request.body );
  response.send("yayaya");

})


const PORT = 3000;
console.log("start listening: "+PORT);
app.listen(PORT, ()=>{console.log("NOW LISTENING");});
console.log("now we are listening");