// ******************************************************************************
// friend.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react"

class Friend extends React.Component{
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
					<h1 className="text-center"> Friend Finder </h1>
				</div>
				<div className="row">
					<div className="col-md-6">
						<img className="screenshot" src="assets/img/friend_5.png" />
					</div>
					<div className="col-md-6">
						<h3><a href="https://infinite-reaches-57831.herokuapp.com/" target="_blank"> Find out who you'd hang out with in Pawnee</a></h3>
						<p className="project-text">This is a full-stack app created using:</p>
							<ul className="project-text">
								<li>HTML <img className="icon" src="assets/img/html5.png"/></li>
								<li>CSS <img className="icon" src="assets/img/css3.png"/></li>
								<li>JavaScript/jQuery <img className="icon" src="assets/img/javascript.png"/> &nbsp; <img className="icon" src="assets/img/jquery.png"/></li>
								<li>Node.js/Express <img className="icon" src="assets/img/node.png"/></li>
							</ul>						
						<p className="project-text">Parks and Rec character data is stored in JSON and a user answers questions to find out who they are most compatible with.  The data entered by the user is saved and is compared to future users.<a href="https://infinite-reaches-57831.herokuapp.com/" target="_blank"> CLICK HERE </a> to take the test or checkout the <a href="https://github.com/antipodd/FriendFinder" target="_blank" >Github repository here</a></p>

					</div>
				</div>
				
			</div>
		);
	}
}

export default Friend;