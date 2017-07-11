// ******************************************************************************
// hangman.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react"

class Hangman extends React.Component{
	constructor(props) {
		super(props); 
		

	}

	/*componentDidMount() {
	    let hash = this.props.location.hash.replace('#', '');
	    if (hash) {
	        let node = ReactDOM.findDOMNode(this.refs[hash]);
	        if (node) {
	            node.scrollIntoView();
	        }
	    }
	}*/

	render() {
		return (
			<div>
				<br/>
				<hr/>
				<br/>
				<div className="jumbotron" ref={this.props.refProp}>
					<button onClick={this.props.top} className="btn btn-primary btn-lg back-to-top" title="Click to return on the top page"><span className="glyphicon glyphicon-chevron-up"></span></button>
					<h1 className="text-center"> Super Mario Hangman </h1>
					
				</div>

				<div className="row">
					<div className="col-md-6">
						<img className="screenshot" src="assets/img/mario_4.png" />
					</div>
					<div className="col-md-6">
						<h3><a href="https://antipodd.github.io/Hangman-Game/" target="_blank"> Play Super Mario Hangman</a></h3>
						<p className="project-text">This app was created using:</p>
							<ul className="project-text">
								<li>HTML <img className="icon" src="assets/img/html5.png"/></li>
								<li>CSS <img className="icon" src="assets/img/css3.png"/></li>
								<li>JavaScript <img className="icon" src="assets/img/javascript.png"/></li>
							</ul>						
						<p className="project-text">To play hangman and guess the characters from Super Mario <a href="https://antipodd.github.io/Hangman-Game/" target="_blank"> CLICK HERE </a> (turn the volume up!) or checkout the <a href="https://github.com/antipodd/Hangman-Game" target="_blank" >Github repository</a></p>

					</div>
				</div>
				
				
			</div>
		);
	}
}

export default Hangman;