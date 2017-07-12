// ******************************************************************************
// projects.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react"
import ReactDOM from "react-dom";
import {Link} from "react-router"
import Trivia from "../components/Projects/trivia"
import Hangman from "../components/Projects/hangman"
import BestB4 from "../components/Projects/bestb4"
import Friend from "../components/Projects/friend"
import Tutor from "../components/Projects/tutor"
import NYT from "../components/Projects/nyt"

//const tng = require("file-loader!../../public/assets/img/TNG_trivia_2.png")

class Projects extends React.Component{
	constructor(props) {
		super(props); 
		this.onClickHandler = this.onClickHandler.bind(this);
		this.scrollToTop = this.scrollToTop.bind(this);
	}

	scrollToTop () {
		console.log("scrolling to top")
		window.scroll(0,0);
	}

	onClickHandler (ref) {
		console.log(ref)
	    let node = ReactDOM.findDOMNode(ref);
        if (node) {
            node.scrollIntoView();
        }
	}

	

	/*dont link as children, load as elements on the page and set anchor tags*/
	render() {
		/*this.state.reduce((item) => {
			
		})*/
		return (
			<div>
				<div className="top-color">
					<div className="page-title">
						<h1 className="text-center"> Projects </h1>
					</div>
				</div>
				<div className="container">
					<div id="projects">
						<div className="row">
							<div className="col-md-4" onClick={() => this.onClickHandler(this.trivia)}>
								<img className="project-img" src="assets/img/TNG_trivia_2.png" alt="Star-Trek-Trivia" />
							</div>
												
							<div className="col-md-4" onClick={() => this.onClickHandler(this.hangman)}>
								<img className="project-img" src="assets/img/mario_2.png" alt="super-mario" />
							</div>

							<div className="col-md-4" onClick={() => this.onClickHandler(this.bestb4)}>
								<img className="project-img" src="assets/img/bestb4_2.png" alt="bestb4" />
							</div>
							
						</div>
						<div className="row row-m-t">
							<div className="col-md-4" onClick={() => this.onClickHandler(this.friend)}>
								<img className="project-img" src="assets/img/friend_3.png" alt="Pawnee-friend-finder" />
							</div>
							<div className="col-md-4" onClick={() => this.onClickHandler(this.tutor)}>
								<img className="project-img" src="assets/img/tutor_2.png" alt="tutor-karma" />
							</div>
							<div className="col-md-4" onClick={() => this.onClickHandler(this.nyt)}>
								<img className="project-img" src="assets/img/nyt_2.png" alt="nyt-react-app" />
							</div>
						</div>

						<Trivia refProp={(trivia) => {
							this.trivia = trivia;
							console.log('trivia is', trivia);
						}} top={this.scrollToTop}/>
						<Hangman refProp={(hangman) => {
							this.hangman = hangman;
							console.log('hangman is', hangman);
						}} top={this.scrollToTop}/>
						<BestB4 refProp={(bestb4) => {
							this.bestb4 = bestb4;
							console.log('bestb4 is', bestb4);
						}} top={this.scrollToTop}/>
						<Friend refProp={(friend) => {
							this.friend = friend;
							console.log('friend is', friend);
						}} top={this.scrollToTop}/>
						<Tutor refProp={(tutor) => {
							this.tutor = tutor;
							console.log('tutor is', tutor);
						}} top={this.scrollToTop}/>
						<NYT refProp={(nyt) => {
							this.nyt = nyt;
							console.log('nyt is', nyt);
						}} top={this.scrollToTop}/>

						
					</div>				
				</div>
			</div>
		);
	}
}

export default Projects;