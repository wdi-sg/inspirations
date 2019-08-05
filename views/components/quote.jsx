var React = require('react');
console.log('entering quotes')
class QuotesList extends React.Component {
  render() {
    let quotesList = this.props.quotesList.map(quote => {
        return (
        <div className="card">
            <div className="card-header text-white bg-primary">{quote.userid}
            </div>
            <div className="card-body bg-light px-2 py-2">
                <div className="card-text py-3 px-4">{quote.content}</div>
            </div>
        </div>
        )
    });

    return (
        <div>
        {quotesList}
        </div>
        )

  };

};

module.exports = QuotesList;