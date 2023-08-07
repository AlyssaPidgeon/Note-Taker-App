//import Express.js
const express = require("express");
//initialize express.js
const app = express();
//to server path for files lcoated on server
const path = require("path");
//specify port for express.js to run on:
//update for heroku:
const PORT = 3001;

//serve static files when requested from public dr
app.use(express.static("public"));

//get route for sending HTML file for first HTML page:
//use path.join method to join paths dirname adn index.html together:
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

//route for get notes HTML file:
app.get("/notes", (req, res) => {
  res.sendFile(path.join(_dirname, "notes.html"));
});

// //?need a fallback route for this application??
// app.get("*", (req, res) =>
//   res.send(
//     `Make a GET request using Insomnia to <a href="http://localhost:${PORT}">http://localhost:${PORT}</a>`
//   )
// );

//listen method for incoming conections to PORT
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
