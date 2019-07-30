CREATE TABLE IF NOT EXISTS quotes (
	id SERIAL PRIMARY KEY,
	quote TEXT,
	user_id INT
);

CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	username TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS users_quotes (
	id SERIAL PRIMARY KEY,
	user_id INT,
	quote_id INT
);