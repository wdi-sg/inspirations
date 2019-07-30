
var React = require('react');

class Home extends React.Component {

    render() {
        return (

            <html>
                <body>
                    <h1> WISE, YOU ARE</h1>

                    <form>
                    <input type = "text" name="quotes" id="quoteID" />
                    <button type ="submit" id="submitButtonID">Submit</button>
                    </form>

                    <h2> The wise one once said.. </h2>
                    <ul id = "listID"></ul>

                     <script src='public/script.js'/>

                </body>
            </html>
        )
    }
};

module.exports = Home;