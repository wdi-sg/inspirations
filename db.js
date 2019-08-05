const pg = require('pg');
const url = require('url');

var configs;

configs = {
        user: 'apooshoo',
        password: 'neilgaiman1',
        host: '127.0.0.1',
        database: 'quotes',
        port: 5432
    };


const pool = new pg.Pool(configs);

pool.on('error', function (err) {
    console.log('idle client error', err.message, err.stack);
});


/**
 * ===========================================
 * Require Model Files
 * ===========================================
 */
const allQuotesModelsFunction = require('./models/quote');
const allAccountModelsFunction = require('./models/account');


const quoteModelsObject = allQuotesModelsFunction(pool);
const accountModelsObject = allAccountModelsFunction(pool);


/**
 * ===========================================
 * Module Exports
 * ===========================================
 */
module.exports = {
    //make queries directly from here
    queryInterface: (text, params, callback) => {
        return pool.query(text, params, callback);
    },

    // get a reference to end the connection pool at server end
    pool: pool,

    /*
     * ADD APP MODELS HERE
     */

    quote: quoteModelsObject,
    account: accountModelsObject,
};