const express = require("express");
const functions = require("./functions");

const app = express();
const port = 9000;

// Exercise 4: Hello route
app.get("/hello", function(request, response) {
  response.send(functions.sayHello());
});

// Exercise 5: Roll route (Slide 35)
app.get("/roll", function(request, response) {
  const number = functions.roll();
  response.send(number.toString());
});

// Exercise 6: Greeting route
app.get("/greeting", function(request, response) {
  response.send(functions.getGreeting());
});

// Exercise 7: Calculator REST API endpoints
app.get("/calc/add", function(request, response) {
  const a = parseFloat(request.query.a);
  const b = parseFloat(request.query.b);
  response.json({ result: functions.add(a, b) });
});

app.get("/calc/divide", function(request, response) {
  const a = parseFloat(request.query.a);
  const b = parseFloat(request.query.b);
  if (b === 0) {
    return response.status(400).json({ error: "Division by zero" });
  }
  response.json({ result: functions.divide(a, b) });
});

const server = app.listen(port, function() {
  console.log("Listening on " + port);
});

module.exports = { app, server };
