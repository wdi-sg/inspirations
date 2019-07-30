var React = require("react");
var Defaultlayout = require("./layouts/layout");
var QuotesList = require("./components/quote");

var sha256 = require('js-sha256');
var SALT = 'bonk';
// var loggedTrue = sha256('true'+SALT);

// let cookies = this.props.cookies;
// console.log("entering tweetcard")
// console.log(cookies.user)
// console.log(cookies.loggedIn)
// console.log("exiting tweetcard")

// if (cookies.loggedIn === loggedTrue){
//     return(
//         <div className="col col-sm-10 offset-sm-1 col-lg-6 offset-lg-3">
//             <div className="card">
//                 <div className="card-header text-white bg-primary">Tweet something, {cookies.user}!
//                 </div>
//                 <div className="card-body bg-light px-2 py-2">
//                     <form className="form py-0 px-0" method="POST" action="/tweet">
//                         <input type="text" className="card-input form-control" name="content" placeholder="Type here"/>
//                         <button className="btn btn-primary" type="submit">Tweet</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// } else {
//     return(
//         <p>BEGONE STRANGER</p>
//     );
// }

class Home extends React.Component {
  render() {
    let quotesList = this.props.quotesData;
    console.log("IN HOME: ", quotesList);
    return (
        <Defaultlayout>
                    <div className="row mainwrapper">
                        <div className="col col-lg-3 offset-lg-2 left-col">
                            <p>LEFT COL</p>
                        </div>
                        <div className="col col-lg-6 right-col">
                            <div className="card">
                                <div className="card-header text-white bg-primary">Make a quote!!
                                </div>
                                <div className="card-body bg-light px-2 py-2">
                                    <form className="form create-quote" method="POST" action="/quote">
                                        <input type="text" className="card-input form-control" name="content" placeholder="Type here"/>
                                        <button className="btn btn-primary" type="submit" id="create-quote-btn">Quote</button>
                                    </form>
                                </div>
                                <QuotesList quotesList={quotesList}></QuotesList>
                            </div>
                        </div>
                    </div>
                    <script src="./script.js"></script>
        </Defaultlayout>


    );
  }
}

module.exports = Home;