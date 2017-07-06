// ******************************************************************************
// projects.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react"

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
							<img className="project-img" src="assets/img/TNG_trivia_2.png" alt="Star-Trek-Trivia" data-toggle="collapse" data-target="#trivia-project" data-parent="#projects" />
						</div>
											
						<div className="col-md-4">
							<img className="project-img" src="assets/img/mario_2.png" alt="super-mario" data-toggle="collapse" data-target="#super-mario" data-parent="#projects" />
						</div>
						
					</div>
					<div className="accordian-group">
						<div id="trivia-project" className="collapse indent">
								<h3>Stuff about trivia</h3>
						</div>
						<div id="super-mario" className="collapse indent">
								<h3>Stuff about hangman</h3>
						</div>
					</div>
				</div>
				
				
			</div>
		);
	}
}

export default Projects;