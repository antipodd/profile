// ******************************************************************************
// trivia.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react";
import ReactDOM from "react-dom";

class Trivia extends React.Component{
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
					<h1 className="text-center"> Star Trek Trivia </h1>
					{/*<p className="lead text-center"><a href="https://github.com/antipodd/TriviaGame" target="_blank" > Github </a></p>
					<p className="lead text-center"><a href="https://infinite-brushlands-92040.herokuapp.com" target="_blank"> Play Star Trek Trivia! </a></p> */}
					
				</div>

				<div className="row">
					<div className="col-md-6">
						<img className="screenshot" src="assets/img/TNG_trivia_3.png" />
					</div>
					<div className="col-md-6">
						<h3><a href="https://infinite-brushlands-92040.herokuapp.com" target="_blank"> Play Star Trek Trivia with an LCARS Interface!</a></h3>
						<p className="project-text">This app was created using:</p>
							<ul className="project-text">
								<li>HTML <img className="icon" src="assets/img/html5.png"/></li>
								<li>CSS <img className="icon" src="assets/img/css3.png"/></li>
								<li>JavaScript/jQuery <img className="icon" src="assets/img/javascript.png"/> &nbsp; <img className="icon" src="assets/img/jquery.png"/></li>
							</ul>
						<p className="project-text">and the LCARS framework was obtained from <a href="https://github.com/Garrett-/lcars" target="_blank">this repository</a></p>
						<p className="project-text">If you know your Star Trek then play the game <a href="https://infinite-brushlands-92040.herokuapp.com" target="_blank">here</a> or checkout the <a href="https://github.com/antipodd/TriviaGame" target="_blank" >Github repository</a></p>
					</div>
				</div>
				
				
			</div>
		);
	}
}

export default Trivia;