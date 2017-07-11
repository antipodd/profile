// ******************************************************************************
// tutor.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react"

class Tutor extends React.Component{
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
					<h1 className="text-center"> Tutor Karma </h1>
				</div>
				<div className="row">
					<div className="col-md-6">
						<img className="screenshot" src="assets/img/tutor_2.png" />
					</div>
					<div className="col-md-6">
							<h3><a href="https://github.com/antipodd/tutorKarma" target="_blank"> Book a tutor with the TutorKarma app!</a></h3>
							<p className="project-text">This is a full-stack app created using:</p>
								<ul className="project-text">
									<li>HTML <img className="icon" src="assets/img/html5.png"/></li>
									<li>CSS <img className="icon" src="assets/img/css3.png"/></li>
									<li>JavaScript/jQuery <img className="icon" src="assets/img/javascript.png"/> &nbsp; <img className="icon" src="assets/img/jquery.png"/></li>
									<li>Node.js/Express <img className="icon" src="assets/img/node.png"/></li>
									<li>Handlebars.js <img className="icon" src="assets/img/handlebars.png"/></li>
									<li>MySQL/Sequelize <img className="icon" src="assets/img/mysql.png"/></li>
								</ul>
							<p className="project-text">This app was created in collaboration with <a href="https://github.com/mstorino"> Maggie Storino</a>, <a href="https://github.com/angelasanecki"> Angela Sanecki</a>, <a href="https://github.com/AlitaKendrick"> Alita Kendrick</a> and <a href="https://github.com/rnz269"> Rahul Nallappa</a></p>						
							<p className="project-text"> View the <a href="https://github.com/antipodd/tutorKarma" target="_blank" >Github repository here</a></p>

					</div>
				</div>	
				
			</div>
		);
	}
}

export default Tutor;