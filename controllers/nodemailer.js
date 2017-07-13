// ******************************************************************************
// nodemailer.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const router = express.Router();


router.get('/message', function(req,res) {
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