module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

    let mainForm = (request, response) => { // function declared in routes.js
        db.main.getAll((error, allQuotes) => {
            if (error) {
                console.log("Error getting quotes");
            } else {
                if (allQuotes) {
                    data = {
                        allQuotes: allQuotes
                    }
                    response.render('home', data); //display home page
                } else {
                    console.log("brewing quotes~~~");
                }

            }
            }
        );

    };


    let createQuote = (request, response) => { // function declared in routes.js
        db.main.postQuote(request.body, (error, allQuotes) => {
            if (error) {
                console.log("Error getting quotes");
            }
                response.redirect('/'); // quote posted
            }
        );

    };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */

  return {
    home: mainForm, // see above line 9
    create: createQuote
  };
}