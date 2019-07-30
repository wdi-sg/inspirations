var React = require('react');

class Hello extends React.Component {

  render() {
    console.log('sushi');

    const list = this.props.quotes.map(listItem =>{
        return (
            <li>{listItem.quote}</li>
            )
    })


    return (
              <html>
                <body>
                  <h1>Inspiration quotes</h1>
                  <input id="input"></input>

                  <p><button id="btn">Add to List</button></p>

                  <ul id="list">{list}</ul>

                  <script src="/script.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = Hello;