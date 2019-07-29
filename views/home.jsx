var React = require('react');

class Home extends React.Component {

  render() {

    return (
              <html>
                <body>
                  <h1>Hello From Hilmi's Computer</h1>

                  <form action="/quotes" method="POST">
                    <p> Please type in your inspirational quote below </p>
                    <input type="text" id="quote" />
                    <button type="submit" id="submitBtn">Submit</button>
                  </form>


                <script src='/script.js'/>
                </body>
              </html>
    );
  }
}

module.exports = Home;