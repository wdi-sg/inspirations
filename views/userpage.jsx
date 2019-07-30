var React = require("react");

class HOME extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Inspiration</title>
        </head>
        <body>
          <h1> hello {this.props.username} </h1>
          <h1> Inspiration Quotes </h1>
          <input  id={'inputQuote'} type={'text'} placeholder = {'Enter Inspiration Quote'} />
          <button id={'submitQuote'}> Submit Quote </button>
          <ul id={'quoteList'}>
          </ul>
          <script src={'script2.js'}></script>
          <script src={'script.js'}></script>
        </body>
      </html>
    );
  }
}

module.exports = HOME;

