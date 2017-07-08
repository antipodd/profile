// ******************************************************************************
// routes.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react";
import {Route, Router, hashHistory, IndexRoute} from "react-router";
import Main from "../components/main";
import About from "../components/about";
import Projects from "../components/projects"
import Publications from "../components/publications"
import Contact from "../components/contact"
import Trivia from "../components/Projects/trivia"
import Hangman from "../components/Projects/hangman"
import BestB4 from "../components/Projects/bestb4"
import Friend from "../components/Projects/friend"
import Tutor from "../components/Projects/tutor"
import NYT from "../components/Projects/nyt"

// *** Routes
// =============================================================

export default (
	<Router history={hashHistory}>
    	<Route path="/" component={Main}>
	    	<Route path="About" component={About} />
	    	<Route path="Projects" component={Projects}>
	    		  <Route path="Trivia" component={Trivia} />
        		<Route path="Hangman" component={Hangman} />
        		<Route path="BestB4" component={BestB4} />
        		<Route path="Friend" component={Friend} />
        		<Route path="Tutor" component={Tutor} />
        		<Route path="NYT" component={NYT} />
      	</Route>
	    	<Route path="Publications" component={Publications} />
	    	<Route path="Contact" component={Contact} /> 
     
	      	<IndexRoute component={About} />
	    </Route>
  	</Router>
);