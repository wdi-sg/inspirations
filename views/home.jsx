var React = require('react');

class Home extends React.Component {

  render() {
    console.log('this.props');
    console.log(this.props);

    const quotesList = this.props.quotes.map((quote)=>{
        return <p>{quote.id}. {quote.quote}</p>;
    });

    return (
              <html>
                <body>
                  <h1>Feed page</h1>
                  <div>{quotesList} </div>
                  <form action="/quote" method="POST">
                    <textarea id="qoute-text" name="quote"/>
                    <input id="post-button" type="submit"/>
                </form>
                <div id="feedback"></div>
                  <script src="/script.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = Home;
