/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    let getAll = (callback) => {
        let query = 'SELECT * FROM quotes';
        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, queryResult.rows);
                } else {
                    callback(null, null);
                }
            }
        });
    };

    let insertQuote = (content,callback) => {
        let query = 'INSERT INTO quotes (quote) VALUES ($1) RETURNING *';
        let arr = [content];

        dbPoolInstance.query(query, arr,(error, queryResult) => {
            if (error) {

                callback(error, null);
            } else {
                if (queryResult.rows.length > 0) {
                    callback(null, true);
                } else {
                    callback(null, null);
                }
            }
        });
    }

    return {
        getAll,
        insertQuote
    };
};