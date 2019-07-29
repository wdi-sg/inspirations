var React = require('react');

class Home extends React.Component {

  render() {

    return (
              <html>
                <body>
                  <h1>Hello From Hilmi's Computer</h1>

                  <form>
                    <p> Please type in your inspirational quote below </p>
                    <input type="text" name="quotes" id="quote" />
                    <button type="submit" id="submitBtn">Submit</button>
                  </form>

                <script src='/script.js'/>
                </body>
              </html>
    );
  }
}

module.exports = Home;