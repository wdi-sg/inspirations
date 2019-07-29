console.log("about to require express");
const express = require('express');

const app = express();
console.log("done creating app");

app.use(express.static('public'))

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

// this tells express where to look for the view files
app.set('views', __dirname + '/views');

// this line sets react to be the default view engine
app.set('view engine', 'jsx');

const pg = require('pg');

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));
// Initialise postgres client
const config = {
  user: 'sowyuen',
  host: '127.0.0.1',
  database: 'quotes',
  port: 5432,
};

const pool = new pg.Pool(config);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});



app.get('/', (request, response) => {
  console.log("hommsie");
  response.render('home');
})


app.post('/',(request,response)=>{
    let text = 'INSERT INTO quoteTable (quote) VALUES($1) RETURNING *';
    let values= [request.body.quote];
    console.log(request.body);
    pool.query(text,values,(err,result)=>{
        if(err){
            console.log(err);
        }else{
            let data = {
                data : result.rows
            };
            response.json(data);
        }
    });

});

// app.get('/banana', (request, response) => {

//   console.log('waffles');

//   const data = {
//     cucumber : "bacon",
//     rice : "mango"
//   };

//   response.send(data);
// });


// app.get('/apple',(request,response)=>{
//     let text = "SELECT * FROM students";
//     pool.query(text,(err,result) =>{
//         if(err){
//             console.log(err);
//         }
//         else{
//             const data = {
//                 data : result.rows
//             };
//             response.json(data);
//         }
//     });
// });


const port = 3000;
console.log("start listening");
app.listen(port)
console.log("done listening");