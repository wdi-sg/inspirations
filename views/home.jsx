var React = require('react');

class Home extends React.Component {

  render() {
    console.log('showing jsx');

 let showquotes = this.props.quotesList.map(quote => {
        return (
                <li>{quote.quote}</li>
                )

    return (
              <html>
                <head>
                </head>
                <body>
                  <h1>Inspirational Quotes</h1>

                  <ul>{showquotes}</ul>

                  <p>
                      Enter quote here:
                      <input id="quote"/>
                  </p>
                  <button id="submit">Submit</button>

                </body>
              </html>
    )
  });
};
};

module.exports = Home;

// <script src="/script.js"></script>