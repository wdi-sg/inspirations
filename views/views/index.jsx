var React = require("react");

class Home extends React.Component {
  render() {
    let allList = this.props.result.map(x=>{
        return <li>{x.quote}</li>
    })
    return (
      <html>
        <head />
        <body>
          <h3>Hello</h3>
          <input type="text" id="quote-input"/>
          <input type="submit" value="submit" id="submit-button"/>
          <ul>{allList}</ul>
          <script src="/script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;
