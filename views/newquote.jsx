var React = require("react");

class NewQuote extends React.Component {
  render(){


return (
    <html>
    <head>
        <link rel={"stylesheet"} href={`/style.css`} />
    </head>
        <body>
          <h1>Enter New Quote</h1>
            <form method="POST" action="/newquote">

                <p>Inspirational Quote</p>
                <input type="text" name="quotes" value="quote"/>

                <br/>

                <input type="submit"/>
            </form>
        </body>
    </html>
        );
    }
};

module.exports = NewQuote;