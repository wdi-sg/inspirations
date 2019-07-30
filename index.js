const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const pg = require('pg');

// Initialise postgres client
const config = {
	user: 'shirleytan',
	host: '127.0.0.1',
	database: 'inspiration',
	port: 5432,
};

const pool = new pg.Pool(config);

pool.on('error', function (err) {
	console.log('idle client error', err.message, err.stack);
});

// this line below, sets a layout look to your express project
const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.use(express.static('public'));

app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', (request, response) => {
	response.render('home');
});

app.post('/', (request, response) => {
	let query = "INSERT INTO quote(quote) VALUES($1)";
	const values = [request.body.quote];

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
	});
});


app.listen(3000, ()=>{console.log("Listening on 3000");});