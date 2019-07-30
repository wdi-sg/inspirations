var React = require('react');

class Home extends React.Component {

  render() {
    console.log('HOME PAGE RENDERING');

    return (
              <html>
                <head>
                    <link rel="stylesheet" href="/style.css" />
                </head>
                <body>
                  <h1>Inspiration</h1>
                      <div class="form-group">
                        <label>Quote</label>
                        <input id="quote" name="quote"/>
                        <button id="new_quote">Post Quote</button>
                      </div>

                  <ul>
                    {this.props.rows.map(quotes =>
                    <li>{quotes.content}</li>
                    )}
                  </ul>

                  <script src="/script.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = Home;