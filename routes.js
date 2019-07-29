module.exports = (app, allModels) => {

  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

    // require the controller
    const mainControllerCallbacks = require('./controllers/main_ctrl')(allModels);

    // ========================
    // GET home page
    // ========================
    app.get('/', mainControllerCallbacks.home); // see main_ctrl.js
    app.post('/create', mainControllerCallbacks.create);

};