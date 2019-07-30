var React = require('react');

class Home extends React.Component {

  render() {
    console.log('hi stuff');

    let quotes = this.props.quotes;
    let quoteListing = quotes.map(oneQuote => {
        return (<li>{oneQuote.quote}</li>);
    })

    return (
              <html>
                <head>
                </head>
                <body>
                  <h1>Create your own inspirational Quotes</h1>
                  <p>
                      Add your quote here:
                      <input type="text" input id="quoteform"/>
                  </p>
                  <button id="postButton">click me to post</button>
                  <ul>
                    {quoteListing}
                  </ul>

                  <script src="/script.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = Home;