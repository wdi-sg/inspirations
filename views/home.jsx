var React = require("react");

class Home extends React.Component {
  render() {
    var url = '/home/qoute'
    return (
      <html>
        <head />
        <body>
            <h1>Quote</h1>
            <h2>Enter your quote: </h2>
            <input type="text" id = 'quote' name="quote"/>
            <input type="submit" id="one"/>
            <p>All quotes</p>
            <ul></ul>
            <script src="/script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;