CREATE TABLE IF NOT EXISTS quotes (
    id SERIAL PRIMARY KEY,
    quote TEXT
);

INSERT INTO quotes (quote) VALUES ('My first quote hurray');
