const express = require("express");
//initialize express.js
const app = express();
//to server path for files lcoated on server
const homeRoutes = require("./routes/homeRoutes");
//to read file - allows updating file with new to do entries;
const apiRoutes = require("./routes/apiRoutes");

// const deleteRoutes = require("./routes/deleteRoutes.js");
//specify port for express.js to run on:
const PORT = process.env.PORT || 3001;

//middleware to handle data from client side to be parsed through json:
app.use(express.json());
//middleware to handle client data when using form on HTML:
app.use(express.urlencoded({ extended: true }));

//serve static files when requested from public dr
app.use(express.static("public"));
app.use(apiRoutes);
app.use(homeRoutes);
// app.use(deleteRoutes);

//listen method for incoming conections to PORT
app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
