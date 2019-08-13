var React = require('react');

class Index extends React.Component {
    render() {
        console.log(this.props.rows);
      let quotes = this.props.rows.map((data)=>{
          return <li>{data.quote}</li>;
      });
    return (
        <html>
            <body>
                <h2>Inspirations</h2>
                <input id="textQuotes" type="text"/>
                <button id="btnQuotes">Post Quotes</button>
                <script src="/script.js"></script>
                <br />
                <div id="divQuotes">
                <ol>
                {quotes}
                </ol>
                </div>
            </body>
        </html>
    );
  }
}

module.exports = Index;