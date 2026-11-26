
const express = require("express");
const path = require("path");
const functions = require("./functions");

const app = express();
const port = 9000;

// Configure EJS views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Load static CSS files
app.use(express.static(path.join(__dirname, "files")));

// GET route to roll the dice
app.get("/roll", function(request, response) {
    let num = functions.rollDice();
    response.send("You rolled a " + num);
});

// GET route to display dice page
app.get("/dicepage", function(request, response) {
    let num = functions.rollDice();
    response.render("dicepage", {number: num});
});

// Start the server
app.listen(port, function() {
    console.log("Server listening on port " + port);
});
