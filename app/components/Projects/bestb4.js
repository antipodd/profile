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
				<div className="row">
					<div className="col-md-6">
						<img className="screenshot" src="assets/img/bestb4_3.png" />
					</div>
					<div className="col-md-6">
						<h3><a href="https://murmuring-brushlands-68254.herokuapp.com/" target="_blank"> Use leftover ingredients to make delicious meals or donate your food to charity!</a></h3>
						<p className="project-text">This app was created in order to search for recipes using ingredients you have so that food does not go to waste.  A user can create an account and search for and save recipes.  Additionally, we have integrated the Google Maps API so that the user can find a location to donate any ingredients they have to nearby food shelters</p>
						<p className="project-text">This app was created using:</p>
							<ul className="project-text">
								<li>HTML <img className="icon" src="assets/img/html5.png"/></li>
								<li>CSS <img className="icon" src="assets/img/css3.png"/></li>
								<li>Bootstrap <img className="icon" src="assets/img/bootstrap.png"/></li>
								<li>JavaScript/jQuery <img className="icon" src="assets/img/javascript.png"/> &nbsp; <img className="icon" src="assets/img/jquery.png"/></li>
								<li>Firebase <img className="icon" src="assets/img/firebase.png"/></li>
								<li>Google Maps <img className="icon" src="assets/img/maps.png"/></li>
							</ul>
						<p className="project-text">This app was created in collaboration with <a href="https://github.com/powerace"> Taniesha Robinson</a>, <a href="https://github.com/angelasanecki"> Angela Sanecki</a> and <a href="https://github.com/rnz269"> Rahul Nallappa</a></p>,						
						<p className="project-text">Check out our app <a href="https://murmuring-brushlands-68254.herokuapp.com/" target="_blank"> here </a> or take a look at the <a href="https://github.com/antipodd/Recipe-Group-Project" target="_blank" >Github repository</a></p>

					</div>
				</div>
				
			</div>
		);
	}
}

export default BestB4;