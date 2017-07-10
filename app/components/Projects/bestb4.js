// ******************************************************************************
// bestb4.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react"

class BestB4 extends React.Component{
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
					<h1 ref="scroll_here" className="text-center"> Best B4 </h1>
					
				</div>
				
				
			</div>
		);
	}
}

export default BestB4;