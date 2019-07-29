module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (request, response) => {
    db.main.getAll((error,result)=>{
        if(error){
            console.log(error)
        }else{
            if(result){
                data={
                    result:result
                }
                response.render("views/index",data)
            }else{
                console.log("gg")
            }
        }
    })
  };

  let postQuotesControllerCallback = (request,response)=>{
    db.main.insertQuote(request.body.input,(error,result)=>{
        if(error){
            console.log(error);
        }else{
            if(result){
                response.send("Yeehoo");
            }
        }
    })


  }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback,
    postQuotes: postQuotesControllerCallback
  };

}
