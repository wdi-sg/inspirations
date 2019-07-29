var React = require('react');


class Home extends React.Component {
  render() {

    console.log("\nStarto")



    return (
      <html>
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
      </head>
      <body className="vertical-center">
        <div className="container-fluid ">
            <div className="row my-5">
                <div className="col-md-5 mx-auto">
                    <div className="card border-success h-100">
                        <div className="card-header">Quote of the Day</div>
                            <div className="form-group text-center mx-2">
                                <textarea className="form-control" id="input" rows="3" name="quotes"></textarea>
                                <button id="btn-input" className="btn btn-outline-success my-2 mx-2">Post</button>

                            </div>
                    </div>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-5 mx-auto">
                    <div className="card border-success h-100">
                        <div className="card-header">Quotes</div>
                            <ul className="list-group text-center" id="quotes-list">

                            </ul>
                    </div>
                </div>
            </div>




        </div>
      <script src="/script.js"></script>
      </body>
      </html>
      );
  }
}



module.exports = Home;