const React = require('react');

class Index extends React.Component {

  render() {
    let quotes = this.props.quotes;
    let quotesArray = quotes.map( (quote, i) => {
        return <p>{i+1}. {quote.quote}</p>
    })
    return (
              <html>
                <body>
                  <h1>hello Full Stack</h1>
                    <p>Login</p>
                    <p>Name</p>
                    <input id={"login-name"} name={"text"} />
                    <p>Password</p>
                    <input id={"login-password"} name={"text"} />
                    <button id={"login-button"}>Submit</button>

                    <p>Which user?</p>
                    <input id={"input1"} name={"text"} />
                    <button id={"button1"}>Submit</button>

                    <p>Input here:</p>
                    <input id={"input2"} name={"text"} />
                    <button id={"button2"}>Submit</button>


                    <div>
                        {quotesArray}
                    </div>

                  <script src="/script.js"></script>

                </body>
              </html>
    );
  }
}

module.exports = Index;