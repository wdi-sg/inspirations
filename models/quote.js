/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope

    // let getAll = (callback) => {

    //     let query = 'SELECT * FROM Tweet ORDER BY Tweet.date_created DESC';

    //     dbPoolInstance.query(query, (error, queryResult) => {
    //         if (error) {

    //             // invoke callback function with results after query has executed
    //             callback(error, null);

    //         } else {

    //             // invoke callback function with results after query has executed

    //             if (queryResult.rows.length > 0) {
    //                 callback(null, queryResult.rows);

    //             } else {
    //                 callback(null, null);

    //             }
    //         }
    //     });
    // };
    let getAllQuotes = (callback) => {
        let query = `SELECT * FROM quotes`;

        dbPoolInstance.query(query, (err, result) => {
            if(err){
                callback(err, null);
                console.log(err);
            } else if (result.rows.length > 0){
                callback(null, result.rows);
                console.log("FETCHED FROM DB: ", result.rows);
            } else {
                callback(null, null);
            }
        });

    };
    let createQuote = (requestdata, callback) => {
        console.log("entering createQuote model");
        console.log("MODEL REQUESTDATA: ", requestdata);
        let values = [1, requestdata.content];
        let query = `INSERT INTO quotes (userid, content) VALUES ($1, $2) RETURNING *`;

        dbPoolInstance.query(query, values, (err, result) => {
            if(err){
                console.log(err.stack);
            } else if (result.rows.length = 1){
                console.log("CREATED: ", result.rows[0]);
            } else {
                console.log("CREATE QUOTE FAILED");
            }
        });

    };



    return {
        // getAll
        getAllQuotes,
        createQuote
    };
};