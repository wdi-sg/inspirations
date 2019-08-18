var React = require('react');

class Home extends React.Component {

  render() {
    console.log('showing jsx');

    let showquotes = this.props.quotesList.map(quote => {
        return (
            <li>{quote.quote}</li>
        )
    });

    return (
        <html>
            <head>
            </head>
            <body>
                <h1>Inspirational Quotes</h1>
                <ul>{showquotes}</ul>
                <p>Enter quote here</p>
                <form action = "/quotes" method="POST">
                    <textarea id="quote-text" name="quote"/><br/>
                    <input id="post-button" type = "submit" />
                </form>

                <script src="/script.js"></script>
            </body>
        </html>
    )
  };
};

module.exports = Home;

// <script src="/script.js"></script>