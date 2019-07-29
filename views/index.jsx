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
                <h2>inspirations</h2>
                <input id="input" type="text"/>
                <button id="hello">post your inspiration</button>
                <script src="/script.js"></script>
                <p></p>
                <div id="output">
                <ul>
                {quotes}
                </ul>
                </div>
            </body>
        </html>
    );
  }
}

module.exports = Index;
