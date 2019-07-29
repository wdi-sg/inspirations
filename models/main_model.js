/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    let getAll = (callback) => {  // called in ctrl
        let query = `SELECT * FROM quotes`;

        dbPoolInstance.query(query, (error, queryResult) => {
          if( error ){
            // invoke callback function with results after query has executed
            callback(error, null);
          }else{
            // invoke callback function with results after query has executed
            if( queryResult.rows.length > 0 ){
              callback(null, queryResult.rows);
            }else{
              callback(null, null);
            }
          }
        });
    };


    let postQuote = (allQuotes, callback) => {  // called in ctrl file

        let query = `INSERT INTO quotes (quote) VALUES ($1) RETURNING *`;
        const values = [allQuotes.quote];

        dbPoolInstance.query(query, values, (error, queryResult) => {
          if( error ){
            // invoke callback function with results after query has executed
            callback(error, null);
          }else{
            // invoke callback function with results after query has executed
            if( queryResult.rows.length > 0 ){
              callback(null, true);
            }else{
              callback(null, null);
            }
          }
        });
    };

    return {
        getAll,
        postQuote
    };
};