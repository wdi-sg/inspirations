
-- table of quotes listed
CREATE TABLE IF NOT EXISTS quotes (
	id SERIAL PRIMARY KEY,
	quote text
);
\! echo "\nquotes table created\n";