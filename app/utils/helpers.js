// ******************************************************************************
// helpers.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
import axios from "axios";
/*import FileDownload from "react-file-download" */

// ******************************************************************************
// *** Helper functions 
// =============================================================

// Arrow functions are best suited for non-method functions 
const helpers = {
	
	sendMail (message) {
		//console.log(article)
		console.log(message.name, message.email, message.text)
		return axios.post("/message", message)
	}/*,*/

	/*download() {
		return axios.get("/download")
			.then((response) => {
				console.log(response.headers)
        		FileDownload(response.data, "KHartlieb_resume.pdf");
   		});
	}*/

	/*using react-file-download doesn't seem to work well with pdfs*/



}

export default helpers;