var React = require("react");

class Register extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Inspiration</title>
        </head>
        <body>
            <form method={'POST'} action={'/register'}>
              <input type={'text'} placeholder={'username'} name={'username'} /><br />
              <input type={'password'} placeholder={'password'} name={'password'} /><br />
              <button type={'submit'}>Register</button>
            </form>
        </body>
      </html>
    );
  }
}

module.exports = Register;
