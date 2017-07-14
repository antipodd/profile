// ******************************************************************************
// about.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react"
import helpers from "../utils/helpers"

class About extends React.Component{
	constructor(props) {
		super(props); 
		/*this.handleClick = this.handleClick.bind(this)*/

	}

	/*handleClick() {
		helpers.download()
			.then((result) => {})
	}*/

	render() {
		return (
			<div>
				<div className="top-color">
					<div className="page-title">
						<h1 className="text-center"> About Karel </h1>
					</div>
				</div>
				<div className="container">
					
					<div className="row about">
		              	<div className="col-md-12">
		              		<img className="profile-img" src="assets/img/Hartlieb.png" alt="Hartlieb"/>
		              		<p>I grew up in Perth, the capital city of Western Australia, which is almost directly on the opposite side of the planet to Chicago.  I completed my undergraduate and graduate studies in chemistry and materials engineering in Australia and I moved to Chicago to work in the Department of Chemistry at Northwestern University in 2010 as a Postdoctoral Fellow in the laboratory of Prof. Sir Fraser Stoddart, one of the 2016 Nobel Laureates in Chemistry.  In this lab we design and build molecular machines and switches, as well as a large variety of other chemical systems that have potential applications in drug delivery and separation sciences.
		              		</p>

		              		<p>I enrolled in the Northwestern Coding Bootcamp in order to pursue a different career path, and I am enjoying the challenge of learning something completely new to me. In the little spare time I have at the moment I enjoy gaming (especially Fallout and Elder Scrolls builds, and JRPGs) listening to and playing music, jogging, and hacking my way around a golf course.</p>
		              		<a className="btn btn-primary btn-lg" target="_blank" href="/Hartlieb_resume">Click to download Karel's resume</a>
		              		{/*<button type="button" className="btn btn-primary btn-lg" onClick={this.handleClick}>Click to download Karel's resume</button>*/}
		              	</div>
		              	
		            </div>
				</div>
			</div>
		);
	}
}

export default About;