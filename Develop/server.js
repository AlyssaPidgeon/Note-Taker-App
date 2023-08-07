//import Express.js
const express = requier("express");
//initialize express.js
const app = express();
//specify port for express.js to run on:
//update for heroku:
const PORT = 3001;

//listen method for incoming conections to PORT
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
