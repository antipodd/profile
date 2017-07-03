// ******************************************************************************
// footer.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react"

class Footer extends React.Component{
	constructor(props) {
		super(props); 
		

	}

	render() {
		return (
			<footer className="footer">
      			<div className="container">
        			<p className="text-muted">Place sticky footer content here.</p>
      			</div>
    		</footer>
		);
	}
}

export default Footer;



