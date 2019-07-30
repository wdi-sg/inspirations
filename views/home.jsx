var React = require('react');

class Home extends React.Component {

  render() {
    const lists = this.props.quote.map(quotes =>{

        return (
                <li> {quotes.quote}</li>
        )
    });

    return (
              <html>
                <head>
                </head>
                <body>
                  <h1>DESPO INSPO</h1>
                      <input id="enterQuote"/>
                      <br/>
                  <button id="submit">Submit</button>
                  <ul id="inspiration">
                  {lists}

                  </ul>
                  <script src="/script.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = Home;