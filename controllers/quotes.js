const sha256 = require('js-sha256');
const SALT = "sAlT aNd PePpEr";

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    // let registerControllerCallback = (req, res) => {
    //     let username = req.body.username;
    //     let password = sha256(req.body.password);
    //     db.account.checkAccount(username,(error, callback) => {
    //         if (callback) {
    //             res.redirect('/?err=register');
    //         }
    //         else {
    //             db.account.addAccount(username, password,(error, callback) => {
    //                 if (callback) {
    //                     res.cookie('logged_in', sha256(callback[0].username+"logged in"+SALT));
    //                     res.cookie('username', callback[0].username);
    //                     res.redirect('/');
    //                 }
    //                 else {
    //                     res.redirect('/?err=server');
    //                 }
    //             });
    //         }
    //     });
    // };

    let getAllQuotesCC = (req, res) => {
        console.log("entering controller");
        db.quote.getAllQuotes((err, result) => {
            console.log("RESULT IN CC: ", result);
            let data = {
                quotesData: result
            };
            res.render('home', data);
        });
    };

    let createQuoteCC = (req, res) => {
        console.log("entering createQuoteCC");
        console.log("REQ.BODY: ", req.body);
        db.quote.createQuote(req.body, (err, result) => {
            console.log("RESULT IN CC: ", result);
        });
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        // register: registerControllerCallback
        getAllQuotes: getAllQuotesCC,
        createQuote: createQuoteCC
    };

};