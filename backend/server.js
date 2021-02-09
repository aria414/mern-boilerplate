/*************************
 * DEPENDENCIES REQUIRE
 *************************/
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

/*************************
 * IMPORT CONNECTION FILE
 *************************/
const mongoose = require("./db/connection");

/*************************
 * GLOBAL VARIABLES
 **************************/
const { PORT = 4000 } = process.env; // destructuring env variables. Set default value in case nothing in .env

/*************************
 * APPLICATION OBJECT
 **************************/
const app = express();

/***************************
 * Middleware
 ***************************/
app.use(cors()); // use to prevent cors errors, currently allowing all traffic
app.use(morgan("tiny")); // server logging
app.use(express.json()); // parse json bodies
app.use(express.urlencoded({ extended: true })); //parse urlencoded from data bodies.

/***************************
 * Routes and Routers
 ***************************/
app.get("/", (req, res) => {
  res.json({ hello: "Hello World!" });
});

/***************************
 * Server Listener
 ***************************/
app.listen(PORT, () => {
  console.log(`you are listening on port ${PORT}`);
});
