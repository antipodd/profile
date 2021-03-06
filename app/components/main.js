// ******************************************************************************
// main.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================

import React from "react"
import {Link} from "react-router"
//import Header from "./header"
import Footer from "./footer"

class Main extends React.Component{
	constructor(props) {
		super(props); 
		

	}

	render() {
		return (
			<div>
				<div className="top-color">
					<div className="container">
	            		<nav className="navbar">
	                		<a className="navbar-brand" href="/"> 
	                    
	                		</a>
	                		<ul className="nav nav-pills navbar-right nav-stuff">
			                    <li><Link to="/About"><strong>About</strong></Link></li>
						        <li><Link to="/Projects"><strong>Projects</strong></Link></li>
						        <li><Link to="/Publications"><strong>Publications</strong></Link></li>
						        <li><Link to="/Contact"><strong>Contact</strong></Link></li>
			                </ul>
	            		</nav>
	        		</div>
	        	</div>
				    
				    
				{/*<nav className="navbar navbar-default">
				  <div className="container-fluid">
				    
				    <div className="navbar-header">
				      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				        <span className="sr-only">Toggle navigation</span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				        <span className="icon-bar"></span>
				      </button>
				      <p className="navbar-brand"><Link to="/">Brand</Link></p>
				    </div>

				   
				    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				      
				      <ul className="nav navbar-nav navbar-right">
				        <li><Link to="/About">About</Link></li>
				        <li><Link to="/Projects">Projects</Link></li>
				        <li><Link to="/Publications">Publications</Link></li>
				        <li><Link to="/Contact">Contact</Link></li>
				        
				      </ul>
				    </div>
				  </div>
				</nav>*/}
				<div className="row">
          			{this.props.children}
        		</div>

				<Footer />
			</div>
		);
	}
}

export default Main;