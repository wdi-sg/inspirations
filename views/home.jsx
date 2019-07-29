var React = require('react');

class Hello extends React.Component {

  render() {
    console.log('HOME.JSX VIEWS');

    return (
              <html>
                <body>
                  <h1>Write your inspiration quotes!</h1>
                  <input type="text" id="text-input"/>
                  <button id="buttonPost">Post</button>
                  <ul id="inspiration-list"> </ul>

                  <script src="/script.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = Hello;