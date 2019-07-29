var React = require("react");

class Home extends React.Component {
  render(){
    console.log(this.props.quotes)

     return (
        <html>
        <head>
            <link rel={"stylesheet"} href={`/style.css`} />
        </head>
            <body>
              <h1>Welcome!</h1>
            </body>
        </html>
        );
    }
};



module.exports = Home;