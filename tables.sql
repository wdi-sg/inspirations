CREATE TABLE IF NOT EXISTS quotes (
  id SERIAL PRIMARY KEY,
  quote TEXT
);

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  user_name TEXT,
  password TEXT
);

CREATE TABLE IF NOT EXISTS userquotes (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  quote_id INTEGER
);
