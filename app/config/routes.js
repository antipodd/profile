// ******************************************************************************
// routes.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import React from "react";
import {Route, Router, hashHistory, IndexRoute} from "react-router";
import Main from "../components/main";

// *** Routes
// =============================================================

export default (
	<Router history={hashHistory}>
    	<Route path="/" component={Main} />
  	</Router>
);