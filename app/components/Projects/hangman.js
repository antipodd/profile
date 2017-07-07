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

	componentDidMount() {
	    let hash = this.props.location.hash.replace('#', '');
	    if (hash) {
	        let node = ReactDOM.findDOMNode(this.refs[hash]);
	        if (node) {
	            node.scrollIntoView();
	        }
	    }
	}

	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 ref="scroll_here" className="text-center"> Super Mario Hangman </h1>
					
				</div>
				
				
			</div>
		);
	}
}

export default Hangman;