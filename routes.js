module.exports = (app, allModels) => {


  /**
   *  =========================================
   *    ALL ROUTES FOR CONTROLLER
   *  =========================================
   */

  // require the controller
  const quoteCC = require('./controllers/quotes')(allModels);
  const accountCC = require('./controllers/account')(allModels);

  // app.get('/', quoteCC.getAll);
  // app.post('/register', accountCC.register);

  app.get('/', quoteCC.getAllQuotes);

  app.post('/quote', quoteCC.createQuote);

};