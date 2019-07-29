var React = require("react");


class Onequote extends React.Component {
  render() {
    console.log('creating a quote li?');
    return (
        <li>
            {this.props.quotesData.quote}<br />
        </li>
    );
  }
}

class Home extends React.Component {
    render() {
         console.log(this.props.quotesData);
            let itemElements = this.props.quotesData.map((onequote) => {
                return <Onequote quotesData={onequote}> </Onequote>
            });

    return (
        <html>
        <body>
            <h1>Welcome!</h1>
            <p>Hello world!</p>

            {/*<form method="POST" action="/quotes">*/}
                <p>Insert Quote: <input id="inputquote" type="text" name="quote"/></p>
                <p>--</p>
                <button id="submitbtn" type="submit" value="Submit">Submit</button>
            {/*</form>*/}
            <div id="output">
                <ul id="quotelist">
                    {itemElements}
                </ul>
            </div>
            <script src="/script.js"></script>
        </body>
        </html>

    );
  }
}

module.exports = Home;