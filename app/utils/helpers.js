// ******************************************************************************
// helpers.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import axios from "axios";

// ******************************************************************************
// *** Helper functions 
// =============================================================

// Arrow functions are best suited for non-method functions 
const helpers = {
	
	sendMail (message) {
		//console.log(article)
		console.log(message.name, message.email, message.text)
		return axios.get("/message", message)
	}

}

export default helpers;