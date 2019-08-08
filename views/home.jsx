var React = require('react');

class Home extends React.Component {

  render() {
    return (
      <html>
        <body>
          <h1>Hello Inspirators!!</h1>
            <ul>
              <li>You're going to kill it today!</li>
              <li>It's always darkest before the dawn</li>
              <li>Every cloud has a silver lining</li>
            </ul>

              <p>Your Quote</p>
              <input id ="quote" name="quote"/>
              <br></br>
              <button id="post_btn">Post</button>

            <script src="/script.js"></script>
        </body>
      </html>
    );
  }
}

module.exports = Home;