const router = require("express").Router();
const fs = require("fs");
const uniqid = require("uniqid");

router.get("/api/notes/", (req, res) => {
  fs.readFile("db/db.json", "utf-8", (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

//route for notes post
router.post("/api/notes", (req, res) => {
  //output message to web browser:
  console.info(`${req.method} request received to add a new note`);

  const { title, text } = req.body;
  console.log({ title, text }, "route hit");

  //check request has both titel and text:
  if (title && text) {
    const newTodo = {
      title: title,
      text: text,
      id: uniqid(),
    };
    console.log(newTodo);

    //read current file that new data being ápended'to:
    const currentTodoString = JSON.parse(fs.readFileSync("./db/db.json"));
    //make new array using spread syntax to merge arrays:

    // const newTodoList = [...currentTodoString, newTodo];

    currentTodoString.push(newTodo);

    //write to the file:
    fs.writeFileSync("./db/db.json", JSON.stringify(currentTodoString));
    console.log(`New To-Do ${newTodo} has been written to JSON file`);

    //   const response = {
    //     status: "success",
    //     body: newTodo,
    //   };

    // console.log(response);
    res.status(201).json(currentTodoString);
  } else {
    res
      .status(500)
      .send(
        "Error in posting to do item, please enter both title and text fields"
      );
  }
  //log request -body to console
  console.log(req.body);
});

module.exports = router;
