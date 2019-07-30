const express = require('express');
const methodOverride = require('method-override');
const pg = require('pg');
var sha256 = require('js-sha256');
const cookieParser = require('cookie-parser')

// Initialise postgres client
const configs = {
  user: 'postgres',
  host: '127.0.0.1',
  database: 'inspiration_quotes',
  port: 5432,
};

const pool = new pg.Pool(configs);

pool.on('error', function (err) {
  console.log('idle client error', err.message, err.stack);
});

SALT='PASSWORDpasswordPASSWORd';

/**
 * ===================================
 * Configurations and set up
 * ===================================
 */

// Init express app
const app = express();

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(methodOverride('_method'));

app.use(express.static(__dirname+'/public'));


// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/**
 * ===================================
 * Callback Functions
 * ===================================
 */

var displayHomepage = function (request,response) {
	response.render('home');
}

var getAllQuotes = function (request,response) {
	let queryString = "SELECT * FROM quotes INNER JOIN (SELECT id AS user_id,username FROM users) AS u ON (quotes.user_id=u.user_id) ORDER BY id DESC";

	pool.query(queryString, (err,result)=>{
		if (err) {
			console.log(err);
		} else {
			let data = {
				allQuotes: result.rows
			}
			if (request.cookies.woof!==undefined){
				let queryString = "SELECT quote_id FROM users_quotes INNER JOIN quotes ON (users_quotes.quote_id=quotes.id) WHERE users_quotes.user_id = (SELECT id FROM users WHERE username = $1)";
				let values = [request.cookies.woof];

				pool.query(queryString,values, (err,result)=>{
					if (err) {
						console.log(err);
					} else {
						data.allLikes= result.rows;
						console.log(data);
						response.send(data);
					}
				});
			} else {
				response.send(data);
			}
		};
	});
}

var addQuote = function (request,response) {
	let queryString = "INSERT INTO quotes (quote,user_id) VALUES ($1, (SELECT id FROM users WHERE username = $2)) RETURNING *";
	let values = [request.body.quote,request.cookies.woof];

	pool.query(queryString,values, (err,result)=> {
		if (err){
			console.log(err);
		} else {
			data = {
				username:request.cookies.woof,
				quote: result.rows[0].quote,
				id: result.rows[0].id
			}
			response.send(data);
		}
	})
}

var register = function(request,response) {
	response.render('register')
}

var addUser = function(request,response) {
	let passwordHash = sha256(request.body.password+SALT)
	let queryString="INSERT INTO users (username,password) VALUES ($1,$2)";
	let values = [request.body.username, passwordHash];

	pool.query(queryString,values,(err,result)=>{
		if(err){
			console.log(err);
		} else {
			response.redirect('/');
		}
	})
}


var checkLogin = function (request,response) {
	let queryString = 'SELECT * FROM users where username = $1';
	let values = [request.body.username]

	pool.query(queryString,values,(err,result)=>{
		if(err){
			console.log(err);
		} else {
			if (result.rows.length >0) {
				let passwordHash = sha256(request.body.password+SALT);
				if (passwordHash === result.rows[0].password){
					response.cookie('woof', request.body.username);
					response.redirect('/'+request.body.username);
				} else {
					response.redirect('/');
				}
			} else {
				response.redirect('/');
			}
		}
	})
}


var displayUserpage = function(request,response) {
	response.render('userpage',{username:request.params.username});
}


var addLike = function(request,response) {
	let queryString = 'INSERT INTO users_quotes (user_id,quote_id) VALUES ((SELECT id FROM users WHERE username = $1),$2)'
	let values = [request.cookies.woof,parseInt(request.body.id)];

	pool.query(queryString,values,(err,result)=>{
		if(err){
			console.log(err);
		} else {
			response.send(request.body.id);
		}

	});
}

var doUnlike = function (request,response) {
	let queryString = 'DELETE FROM users_quotes WHERE user_id = (SELECT id FROM users WHERE username = $1) AND quote_id = $2';
	let values = [request.cookies.woof,parseInt(request.body.id)];

	pool.query(queryString,values,(err,result)=>{
		if(err){
			console.log(err);
		} else {
			response.send(request.body.id);
		}
	})
}
/**
 * ===================================
 * Routes
 * ===================================
 */

app.get('/',displayHomepage);

app.post('/',checkLogin);

app.post('/like', addLike);

app.post('/unlike', doUnlike);

app.get('/getallquotes',getAllQuotes);

app.post('/addquote',addQuote);

app.get('/register', register);

app.post('/register',addUser);

app.get('/:username',displayUserpage);

/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log('~~~ Tuning in to the waves of port '+PORT+' ~~~'));

let onClose = function(){

  server.close(() => {
    console.log('Process terminated')
    allModels.pool.end( () => console.log('Shut down db connection pool'));
  })
};

process.on('SIGTERM', onClose);
process.on('SIGINT', onClose);
