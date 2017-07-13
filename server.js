// ******************************************************************************
// Server.js 
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

// =============================================================
// *** Import Models
// =============================================================


// =============================================================
// *** Setup Nodemailer
// =============================================================
const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: process.env.EMAILUSER,
        pass: process.env.PASS
    }
});

// =============================================================
// *** Set mongoose to leverage built in JavaScript ES6 Promises
// =============================================================
mongoose.Promise = Promise;

// =============================================================
// *** Initialize Express
// =============================================================
const app = express();

// =============================================================
// *** Database configuration with Mongoose
// =============================================================
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/profile");
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", (error) => {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", () => {
  console.log("Mongoose connection successful.");
});

// =============================================================
// *** Configure Port
// =============================================================
const port = process.env.PORT || 3000;

// =============================================================
// *** Set BodyParser and Morgan
// =============================================================
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// =============================================================
// *** Serve static content for the app from the "public" directory in the application directory.
// =============================================================
app.use(express.static(process.cwd() + "/public"));

// =============================================================
// *** Import and use Routes
// =============================================================
const mailerRoute = require("./controllers/nodemailer.js");
app.use("/", mailerRoute);  

// =============================================================
// *** Express port listener
// =============================================================
app.listen(port, () => {
  console.log("App running on port " + port);
});