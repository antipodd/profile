// ******************************************************************************
// nyt.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react"

class NYT extends React.Component{
	constructor(props) {
		super(props); 
		

	}

	render() {
		return (
			<div>
				<br/>
				<hr/>
				<br/>
				<div className="jumbotron" ref={this.props.refProp}>
					<button onClick={this.props.top} className="btn btn-primary btn-lg back-to-top" title="Click to return on the top page"><span className="glyphicon glyphicon-chevron-up"></span></button>
					<h1 className="text-center"> NYT React App </h1>
				</div>
				<div className="row project-end">
					<div className="col-md-6">
						<img className="screenshot" src="assets/img/nyt_2.png" />
					</div>
					<div className="col-md-6">
							<h3><a href="https://sleepy-journey-51097.herokuapp.com/" target="_blank"> Search the New York Times and save articles of interest</a></h3>
							<p className="project-text">This is a MERN app created using:</p>
								<ul className="project-text">
									<li>HTML <img className="icon" src="assets/img/html5.png"/></li>
									<li>CSS <img className="icon" src="assets/img/css3.png"/></li>
									<li>JavaScript <img className="icon" src="assets/img/javascript.png"/></li> 
									<li>Node.js/Express <img className="icon" src="assets/img/node.png"/></li>
									<li>React <img className="icon" src="assets/img/react.png"/></li>
									<li>MongoDB/Mongoose <img className="icon" src="assets/img/mongodb.jpg"/></li>
									<li>Axios</li>
								</ul>
							<p className="project-text">This app allows a user to search for articles using keywords within specified years by calling the NYT API.  The user can choose to save these articles to a MongoDB as well as delete any previously saved articles.</p> 
							<p className="project-text"> View the app <a href="https://sleepy-journey-51097.herokuapp.com/" target="_blank" > here</a> or checkout the <a href="https://github.com/antipodd/nytreact" target="_blank" >Github repository</a></p>

					</div>
				</div>	
			<br />
			<br />
			<br />
			<br />	
			</div>
		);
	}
}

export default NYT;