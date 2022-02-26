// step 1 : import module express third party
const express = require("express");

// instance de module express
const app = express();

// dont require non module files or folder
app.use(express.static("public"));
//creation de port
const port = 5000;

//creating server
app.listen(port, () => console.log(`the server is running on ${port} `));
