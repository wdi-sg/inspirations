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
  const inspControllerCallbacks = require('./controllers/pokemon')(allModels);

    app.get("/index", inspControllerCallbacks.index);
    app.post("/index", inspControllerCallbacks.postQuotes);
};
