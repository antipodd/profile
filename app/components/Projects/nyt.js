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
				
				
			</div>
		);
	}
}

export default NYT;