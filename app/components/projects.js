// ******************************************************************************
// projects.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react"

import {Link} from "react-router"

//const tng = require("file-loader!../../public/assets/img/TNG_trivia_2.png")

class Projects extends React.Component{
	constructor(props) {
		super(props); 
		

	}

	render() {
		return (
			<div className="container">
				<div className="jumbotron">
					<h1 className="text-center"> Projects section </h1>
					
				</div>
				<div id="projects">
					<div className="row">
						<div className="col-md-4">
							<Link to="/Projects/Trivia#scroll_here"><img className="project-img" src="assets/img/TNG_trivia_2.png" alt="Star-Trek-Trivia" /></Link>
						</div>
											
						<div className="col-md-4">
							<Link to="/Projects/Hangman#scroll_here"><img className="project-img" src="assets/img/mario_2.png" alt="super-mario" data-toggle="collapse" data-target="#super-mario" data-parent="#projects" /></Link>
						</div>

						<div className="col-md-4">
							<Link to="/Projects/BestB4#scroll_here"><img className="project-img" src="assets/img/bestb4_2.png" alt="bestb4" data-toggle="collapse" data-target="#bestb4" data-parent="#projects" /></Link>
						</div>
						<div className="accordian-group">
							<div id="trivia-project" className="collapse">
								<h3>Stuff about trivia</h3>
							</div>
							<div id="super-mario" className="collapse">
								<h3>Stuff about hangman</h3>
							</div>
							<div id="bestb4" className="collapse">
								<h3>Stuff about bestb4</h3>
							</div>
						
						</div>
					</div>
					<div className="row row-m-t">
						<div className="col-md-4">
							<img className="project-img" src="assets/img/friend_3.png" alt="Pawnee-friend-finder" data-toggle="collapse" data-target="#friend" data-parent="#projects" />
						</div>
						<div className="accordian-group">
						
							<div id="friend" className="collapse">
								<h3>Stuff about friend finder</h3>
							</div>
						</div>			
					</div>

					<div>
						{this.props.children}
					</div>

					
				</div>
				
				
			</div>
		);
	}
}

export default Projects;