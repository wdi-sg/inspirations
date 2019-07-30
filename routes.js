module.exports = (app, db) => {

  const mainControllerCallbacks = require('./controllers/main')(allModels);

  app.get('/index', mainControllerCallbacks.index);
  app.post('/index', mainControllerCallbacks.postQuotes);

};
