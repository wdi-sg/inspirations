var React = require("react");

class HOME extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Inspiration</title>
        </head>
        <body>
          <div id={'loginbar'}>
            <form method={'POST'} action={'/'}>
              <input type={'text'} placeholder={'username'} name={'username'} />
              <input type={'password'} placeholder={'password'} name={'password'} />
              <button type={'submit'}>Login</button>
            </form>
            <span><a href={'/register'}>Register</a></span>
          </div>
          <h1> Inspiration Quotes </h1>
          <ul id={'quoteList'}>
          </ul>
          <script src={'script.js'}></script>
        </body>
      </html>
    );
  }
}

module.exports = HOME;

