CREATE TABLE IF NOT EXISTS users (
	id SERIAL PRIMARY KEY,
	name TEXT,
	password TEXT
);

CREATE TABLE IF NOT EXISTS quotes (
	id SERIAL PRIMARY KEY,
	quote TEXT,
	user_id INTEGER
);