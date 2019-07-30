const express = require('express');
const app = express();

const pg = require('pg');

// Initialise postgres client
const config = {
user: 'bennychin',
host: '127.0.0.1',
database: 'tweedrdb',
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

app.use(express.static(__dirname+'/public'));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.get('/', (request, response) => {
    const queryString = 'SELECT * FROM quotes';
    pool.query(queryString, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            response.send('query error');
        } else {
            response.render('home', result);
        }
    })
});

app.post('/quotes', (request, response) => {
    const queryString = 'INSERT INTO quotes (content, user_id) VALUES ($1,$2) RETURNING *';
    // console.log("REQUEST BODY")
    // console.log(request.body)

    let values = [request.body.input, request.body.user_id];

    pool.query(queryString, values, (err, result) => {
        if (err) {
            console.error('query error:', err.stack);
            response.send('query error');
        } else {
            // console.log("RESULT IS");
            // console.log(result);
            response.render('home', result);
        }
    });
});

// app.get('/apple', (request, response) => {
//   response.type('text/css').send('body{ font-style: italic; }');
// });

// app.get('/stuff', (request, response) => {
//   console.log('yes!');
//   response.render('stuff');
// });


// app.get('/dogs/:name', (request, response) => {
//   console.log('yay dogs');

//   response.render('dogs');
// })

// app.get('/users/:id', (request, response) => {

//   let query = "SELECT * FROM users WHERE id=$1";
//   const values = [request.params.id];

//   pool.query(query, values, (queryError, result)=>{

//     if( queryError ){
//       response.send("query error");
//     }else{
//       console.log( result.rows );

//       const data = {
//         users : result.rows
//       };

//       response.json(data);
//     }


//   })

// });


// app.get('/banana', (request, response) => {

//   console.log('waffles');

//   const data = {
//     cucumber : "bacon",
//     rice : "mango"
//   };

//   response.send(data);
// });



////////////////////////////////////////////////////////////////////////////
const PORT = 3000;
console.log("Inspiration listening: "+PORT);
app.listen(PORT, ()=>{console.log("NOW LISTENEING");});
console.log("now we are listening");