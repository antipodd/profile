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
		this.scrollToTop = this.scrollToTop.bind(this);
	}

	scrollToTop () {
		console.log("scrolling to top")
		window.scroll(0,0);
	}

	render() {
		return (
			<footer className="footer">
      			<div className="container">
      				<div className="row">
	      				<div className="col-md-4">
	      					<p onClick={this.scrollToTop}><Link to="/About"><strong>ABOUT</strong></Link></p>
	      					<p>Learn about Karel and his skills</p>
					        <p onClick={this.scrollToTop}><Link to="/Projects"><strong>PROJECTS</strong></Link></p>
					        <p>View Karel's web development work</p>
					        <p onClick={this.scrollToTop}><Link to="/Publications"><strong>PUBLICATIONS</strong></Link></p>
					        <p>View Karel's chemistry related peer-reviewed publications</p>
					        <p onClick={this.scrollToTop}><Link to="/Contact"><strong>CONTACT</strong></Link></p>
					        <p>Send Karel a message</p>
					    </div>
					    <div className="col-md-4">
					    	<ul className="footer-list">
					    		<li>	
							    	<a href="https://twitter.com/KarelHartlieb" target="_blank"> <i className="fa fa-twitter fa-3x"></i></a>
							    	<p className="footer-text"> Follow <a href="https://twitter.com/KarelHartlieb" target="_blank"> <strong>@KarelHartlieb</strong></a></p>
							    </li>
							    <br />
					    		<li>
							    	<a href="https://github.com/antipodd" target="_blank"> <i className="fa fa-github fa-3x"></i></a>
							    	<p className="footer-text"> Checkout <a href="https://github.com/antipodd" target="_blank"><strong>@antipodd</strong></a> on GitHub</p>
							    </li>
							    <br />
							    <li>						    
							    	<a href="https://www.linkedin.com/in/karel-hartlieb/" target="_blank"> <i className="fa fa-linkedin fa-3x"></i></a>
							    	<p className="footer-text"> View my <a href="https://www.linkedin.com/in/karel-hartlieb/" target="_blank"><strong>LinkedIn</strong></a> profile</p>
							    </li>
							</ul>						   
					    </div>
					    <div className="col-md-4">
					    	<img className="footer-img" src="assets/img/Hartlieb.png"/>
					    	<p className="footer-bio"> Scientist and web developer, Karel is a graduate of Northwestern University's Full-Stack Coding Bootcamp and works in the laboratory of Prof. Sir Fraser Stoddart (2016 Nobel Laureate in Chemistry)</p>
					    </div>
					</div>
					<div className="row">
						<div className="col-md-12">
        					<p className="text-muted text-center"> &copy; 2017 Karel Hartlieb</p>
        				</div>
        			</div>
      			</div>
    		</footer>
		);
	}
}

export default Footer;



