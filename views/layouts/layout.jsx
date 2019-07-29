var React = require('react');
console.log('entering layout')
class Layout extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>Quotable</title>
                <meta charSet="utf-8" name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"/>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"  crossOrigin="anonymous"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"/>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"/>
                <link rel="stylesheet" type="text/css" href="./style.css"/>
            </head>

            <body>
            <nav className="navbar navbar-expand-lg sticky-top justify-content-center navbrandrow">
                <a className="navbar-brand" href="/">
                    <img src="letter-q.png" width="30" height="30"
                         className="d-inline-block align-top mr-3" alt=""/>
                    Quotable
                </a>
            </nav>

            <div className="container-fluid my-5">
                {this.props.children}
            </div>



            </body>
            </html>
        );
    }
}

module.exports = Layout;