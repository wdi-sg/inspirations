var React = require("react");
var DefaultLayout = require("./layouts/default");

class Home extends React.Component {
	render() {
		return (
			<DefaultLayout>
				<div className="row">
					<div className="col-8 offset-2 text-center">
						<input type="text" className="form-control" id="text-input"
						       placeholder="Type your inspiration quote here!"/>
						<button type="button" className="btn btn-primary mt-3 btn-lg" id="btn-submit">Post</button>
						<ul id="inspiration-list" className="text-left mt-5"></ul>
					</div>
				</div>
			</DefaultLayout>
		);
	}
}

module.exports = Home;
