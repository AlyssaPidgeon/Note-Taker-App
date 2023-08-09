const router = require("express").Router();
const path = require("path");

//get route for sending HTML file for first HTML page:
//use path.join method to join paths dirname adn index.html together (assist with express.static):
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//route for get notes HTML file:
router.get("/notes", (req, res) => {
  //   res.send("hey");
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});

module.exports = router;
