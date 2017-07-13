// ******************************************************************************
// nodemailer.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: process.env.EMAILUSER,
        pass: process.env.PASS
    }
});

router.post('/message', function(req,res) {
    console.log(req.body);
    const mailOptions={
        to : process.env.EMAILTO,
        subject : `${req.body.name} (${req.body.email}) has sent you a message`,
        text : req.body.text
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response) {
     	if (error) {
            console.log(error);
        	res.end("error");
     	} else {
            console.log("Message sent: " + response.message);
        	res.end("sent");
        }
	});
});

module.exports = router;