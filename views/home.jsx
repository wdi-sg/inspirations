var React = require("react");
const uniqid = require('uniqid');

class Home extends React.Component {
  render() {
    console.log("Home page has taken off!");
    return (
        <html>
        <body>
        <h1 style={{'fontSize': '55px'}}>Inspirations anon</h1>
        <input type="text" name="quote" style={{height: '60px', width:'920px', 'fontSize': '30px'}}/>
        <input type="submit" name="submit" style={{height: '66px', width:'120px', 'fontSize': '30px'}}/>
        <div id="canvas" style={{width:'1100px'}} key={uniqid()}></div>
        <script src="/script.js"></script>
        </body>
        </html>
        );
  }
}

module.exports = Home;