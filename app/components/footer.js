// ******************************************************************************
// footer.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react"
import {Link} from "react-router"

class Footer extends React.Component{
	constructor(props) {
		super(props); 
		

	}

	render() {
		return (
			<footer className="footer">
      			<div className="container">
      				<div className="col-md-4">
      					<p><Link to="/About"><strong>ABOUT</strong></Link></p>
      					<p>Learn about Karel and his skills</p>
				        <p><Link to="/Projects"><strong>PROJECTS</strong></Link></p>
				        <p>View Karel's web development work</p>
				        <p><Link to="/Publications"><strong>PUBLICATIONS</strong></Link></p>
				        <p>View Karel's chemistry related peer-reviewed publications</p>
				        <p><Link to="/Contact"><strong>CONTACT</strong></Link></p>
				        <p>Send Karel a message</p>
				    </div>

        			{/*<p className="text-muted">Place sticky footer content here.</p>*/}
      			</div>
    		</footer>
		);
	}
}

export default Footer;



