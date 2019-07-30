var React = require('react');

class Dog extends React.Component {

  render() {
    console.log('rendering', this.props.dogName);

    return (
              <html>
                <body>
                    <h1>dog</h1>
                    <div id="data"></div>
                    <script>
                        var name = {this.props.dogName};
                        window.onload = function() {
                            console.log('the name of:' , name);
                            var p = document.createElement("p");
                            p.innerText = name;
                            p.style.color ='black';
                            document.body.appendChild(p);
                        };
                    </script>
                    // <script src="script2.js"></script>
                </body>
              </html>
    );
  }
}

module.exports = Dog;