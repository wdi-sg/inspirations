var React = require('react');

class Home extends React.Component {
  render() {
    let quoteList = this.props.allQuotes.map(quote => {
        return <li>{quote.quote}</li>
    });
    return (
      <html>
        <body>
          <div>
            <h1>Welcome to Inspirations</h1>
            <h3>Enter Your Quotes</h3>
            <form action="/create" method="POST">
                    <input type="text" name="quote"/>
                    <input type="submit" value="submit"/>
            </form>
            <h3>See Inspirations</h3>
            <ul>{quoteList}</ul>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;