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
		this.state = { hovered1: false, hovered2: false, hovered3: false, hovered4: false, hovered5: false, hovered6: false }; 
		this.onClickHandler = this.onClickHandler.bind(this);
		this.scrollToTop = this.scrollToTop.bind(this);
		this.style1 = this.style1.bind(this);
		this.style2 = this.style2.bind(this);
		this.style3 = this.style3.bind(this);
		this.style4 = this.style4.bind(this);
		this.style5 = this.style5.bind(this);
		this.style6 = this.style6.bind(this);
		this.onMouseOver1 = this.onMouseOver1.bind(this);
		this.onMouseOut1 = this.onMouseOut1.bind(this);
		this.onMouseOver2 = this.onMouseOver2.bind(this);
		this.onMouseOut2 = this.onMouseOut2.bind(this);
		this.onMouseOver3 = this.onMouseOver3.bind(this);
		this.onMouseOut3 = this.onMouseOut3.bind(this);
		this.onMouseOver4 = this.onMouseOver4.bind(this);
		this.onMouseOut4 = this.onMouseOut4.bind(this);
		this.onMouseOver5 = this.onMouseOver5.bind(this);
		this.onMouseOut5 = this.onMouseOut5.bind(this);
		this.onMouseOver6 = this.onMouseOver6.bind(this);
		this.onMouseOut6 = this.onMouseOut6.bind(this);
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

	style1 () {
      	if (this.state.hovered1) {
        	return { filter: "grayscale(100%)" }
      	} else {
        	return { filter: "grayscale(0%)" }
      	}
    }

    style2 () {
      	if (this.state.hovered2) {
        	return { filter: "grayscale(100%)" }
      	} else {
        	return { filter: "grayscale(0%)" }
      	}
    }

    style3 () {
      	if (this.state.hovered3) {
        	return { filter: "grayscale(100%)" }
      	} else {
        	return { filter: "grayscale(0%)" }
      	}
    }

    style4 () {
      	if (this.state.hovered4) {
        	return { filter: "grayscale(100%)" }
      	} else {
        	return { filter: "grayscale(0%)" }
      	}
    }

    style5 () {
      	if (this.state.hovered5) {
        	return { filter: "grayscale(100%)" }
      	} else {
        	return { filter: "grayscale(0%)" }
      	}
    }

    style6 () {
      	if (this.state.hovered6) {
        	return { filter: "grayscale(100%)" }
      	} else {
        	return { filter: "grayscale(0%)" }
      	}
    }

    onMouseOver1 () {
      	this.setState({ hovered1:true });
    }

    onMouseOut1 () {
      	this.setState({ hovered1:false });
    }

    onMouseOver2 () {
      	this.setState({ hovered2:true });
    }

    onMouseOut2 () {
      	this.setState({ hovered2:false });
    }

    onMouseOver3 () {
      	this.setState({ hovered3:true });
    }

    onMouseOut3 () {
      	this.setState({ hovered3:false });
    }

    onMouseOver4 () {
      	this.setState({ hovered4:true });
    }

    onMouseOut4 () {
      	this.setState({ hovered4:false });
    }

    onMouseOver5 () {
      	this.setState({ hovered5:true });
    }

    onMouseOut5 () {
      	this.setState({ hovered5:false });
    }
    onMouseOver6 () {
      	this.setState({ hovered6:true });
    }

    onMouseOut6 () {
      	this.setState({ hovered6:false });
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
								<img className="project-img" src="assets/img/TNG_trivia_2.png" alt="Star-Trek-Trivia" onMouseOver={this.onMouseOver1} onMouseOut={this.onMouseOut1} style={this.style1()} />
							</div>			
							<div className="col-md-4" onClick={() => this.onClickHandler(this.hangman)}>
								<img className="project-img" src="assets/img/mario_2.png" alt="super-mario" onMouseOver={this.onMouseOver2} onMouseOut={this.onMouseOut2} style={this.style2()}/>
							</div>
							<div className="col-md-4" onClick={() => this.onClickHandler(this.bestb4)}>
								<img className="project-img" src="assets/img/bestb4_2.png" alt="bestb4" onMouseOver={this.onMouseOver3} onMouseOut={this.onMouseOut3} style={this.style3()}/>
							</div>
						</div>
						<div className="row row-m-t">
							<div className="col-md-4">
								<h3 className="text-center" onClick={() => this.onClickHandler(this.trivia)}> Star Trek Trivia </h3>
							</div>
							<div className="col-md-4">
								<h3 className="text-center" onClick={() => this.onClickHandler(this.hangman)}> Super Mario Hangman </h3>
							</div>
							<div className="col-md-4">
								<h3 className="text-center" onClick={() => this.onClickHandler(this.bestb4)}> Best B4 </h3>
							</div>
						</div>

						<div className="row row-m-t">
							<div className="col-md-4" onClick={() => this.onClickHandler(this.friend)}>
								<img className="project-img" src="assets/img/friend_3.png" alt="Pawnee-friend-finder" onMouseOver={this.onMouseOver4} onMouseOut={this.onMouseOut4} style={this.style4()}/>
							</div>
							<div className="col-md-4" onClick={() => this.onClickHandler(this.tutor)}>
								<img className="project-img" src="assets/img/tutor_2.png" alt="tutor-karma" onMouseOver={this.onMouseOver5} onMouseOut={this.onMouseOut5} style={this.style5()}/>
							</div>
							<div className="col-md-4" onClick={() => this.onClickHandler(this.nyt)}>
								<img className="project-img" src="assets/img/nyt_2.png" alt="nyt-react-app" onMouseOver={this.onMouseOver6} onMouseOut={this.onMouseOut6} style={this.style6()}/>
							</div>
						</div>
						<div className="row row-m-t">
							<div className="col-md-4">
								<h3 className="text-center" onClick={() => this.onClickHandler(this.trivia)}> Friend Finder </h3>
							</div>
							<div className="col-md-4">
								<h3 className="text-center" onClick={() => this.onClickHandler(this.hangman)}> Tutor Karma </h3>
							</div>
							<div className="col-md-4">
								<h3 className="text-center" onClick={() => this.onClickHandler(this.bestb4)}> New York Times React App </h3>
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