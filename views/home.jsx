var React = require('react');

//////////////////THE USER WILL SEE THIS RENDERED//////////////////
class Home extends React.Component {

  render() {
    //code logic goes here
    console.log(this.props.cookies)
    if (this.props.cookies.id){
      var loginfo =
      <div>
      <p>Welcome {this.props.cookies.user_name}</p>
      <button id="logout">Logout</button>
      </div>
    }else{
      var loginfo =
      <form id="loginform">
        <label>Username</label>
        <input id="user_name" type="text" name="user_name"/>
        <label>Password</label>
        <input id="password" type="text" name="password"/>
        <input id="login" type="button" value="Login!"/>
      </form>
    }

    return (
      <html>
        <head>
        </head>
        <header>
        </header>
        <body>
          <div id="logininfo">
          {loginfo}
          </div>
          <p>Your inspirational message here!</p>
          <textarea id="input" name="input" rows="4" cols="50"></textarea><br/>
          <button id="button">Submit inspiration!</button>
          <div>
            <h3>Your current quotes</h3>
          </div>
          <div>
            <ul id="append">
            </ul>
          </div>
        </body>
        <script src="/js/script.js"></script>
      </html>
    );
  }
}

module.exports = Home;
