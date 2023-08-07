//import Express.js
// const { log } = require("console");
const express = require("express");
//initialize express.js
const app = express();
//to server path for files lcoated on server
const path = require("path");
//specify port for express.js to run on:
//update for heroku:
const PORT = 3001;

//middleware to handle data from client side to be parsed through json:
app.use(express.json());
//middleware to handle client data when using form on HTML:
app.use(express.urlencoded({ extended: true }));

//serve static files when requested from public dr
app.use(express.static("public"));

//get route for sending HTML file for first HTML page:
//use path.join method to join paths dirname adn index.html together:
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//route for get notes HTML file:
app.get("/notes", (req, res) => {
  //   res.send("hey");
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//route for notes post
app.post("/notes", (req, res) => {
  //output message to web browser:
  console.info(`${req.method} request received to add a new note`);
  // Prepare a response object to send back to the client
  let response;
  // Check if there is anything in the response body
  if (req.body && req.body.product) {
    response = {
      status: "success",
      data: req.body,
    };
    res.status(201).json(response);
  } else {
    res.status(400).json("Request body must at least contain a product name");
  }

  //log request -body to console
  console.log(res.body);
});

// //?need a fallback route for this application??
// app.get("*", (req, res) =>
//   res.send(
//     `Make a GET request using Insomnia to <a href="http://localhost:${PORT}">http://localhost:${PORT}</a>`
//   )
// );

//listen method for incoming conections to PORT
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
