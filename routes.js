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
  const mainControllerCallbacks = require('./controllers/main')(allModels);

  app.get('/index', mainControllerCallbacks.index);
  app.post('/index', mainControllerCallbacks.postQuotes);
  //app.get('/pokemons/:id', pokemons.getPokemon);
};
