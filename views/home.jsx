var React = require('react');

class Hello extends React.Component {

  render() {
    console.log('sushi');
    return (
              <html>
                <body>
                  <h1>inspiration quotes</h1>

                  <button type='submit' id='one'>click here for quotes</button>
                  <ul id='i_quote'>

                  </ul>
                  <script src="/script.js"> </script>
                </body>
              </html>
    );
  }
}

module.exports = Hello;