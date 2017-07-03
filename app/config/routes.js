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

// *** Routes
// =============================================================

export default (
	<Router history={hashHistory}>
    	<Route path="/" component={Main}>
	    	<Route path="About" component={About} />
	    	<Route path="Projects" component={Projects} />
	    	<Route path="Publications" component={Publications} />
	    	<Route path="Contact" component={Contact} /> 
     
	      	<IndexRoute component={About} />
	    </Route>
  	</Router>
);