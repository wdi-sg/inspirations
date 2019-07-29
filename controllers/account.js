const sha256 = require('js-sha256');
const SALT = "sAlT aNd PePpEr";

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let registerControllerCallback = (req, res) => {
        let username = req.body.username;
        let password = sha256(req.body.password);
        db.account.checkAccount(username,(error, callback) => {
            if (callback) {
                res.redirect('/?err=register');
            }
            else {
                db.account.addAccount(username, password,(error, callback) => {
                    if (callback) {
                        res.cookie('logged_in', sha256(callback[0].username+"logged in"+SALT));
                        res.cookie('username', callback[0].username);
                        res.redirect('/');
                    }
                    else {
                        res.redirect('/?err=server');
                    }
                });
            }
        });
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        register: registerControllerCallback
    };

};