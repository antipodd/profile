// ******************************************************************************
// download.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/Hartlieb_resume", function(req, res) {
  	/*const file = "./data/KHartlieb_resume.pdf";*/
  	res.sendFile(path.join(__dirname, '../data', 'KHartlieb_resume.pdf'));
  	
});

module.exports = router;