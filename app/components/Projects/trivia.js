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
					<p className="lead text-center"><a href="https://github.com/antipodd/TriviaGame" target="_blank" > Github </a></p>
					<p className="lead text-center"><a href="https://infinite-brushlands-92040.herokuapp.com" target="_blank"> Play Star Trek Trivia! </a></p> 
					
				</div>

				<div className="row">
					<div className="col-md-6">
						<img className="screenshot" src="assets/img/TNG_trivia_3.png" />
					</div>
				</div>
				
				
			</div>
		);
	}
}

export default Trivia;