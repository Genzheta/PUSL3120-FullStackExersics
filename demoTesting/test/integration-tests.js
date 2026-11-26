const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

chai.use(chaiHttp);

// -----------------------------------------------------------------
// Exercise 4: GET /hello Integration Test
// -----------------------------------------------------------------
suite("Exercise 4: Suite routes - GET /hello", function() {
  test("Test GET /hello returns status 200 and 'Hello world!!'", function(done) {
    chai.request(server.app)
      .get("/hello")
      .end(function(error, response) {
        chai.assert.equal(response.status, 200);
        chai.assert.equal(response.text, "Hello world!!");
        done();
      });
  });
});

// -----------------------------------------------------------------
// Exercise 5: GET /roll Integration Test (Slide 35)
// -----------------------------------------------------------------
suite("Exercise 5: Suite routes - GET /roll", function() {
  test("Test GET /roll returns 200 and a valid dice roll string in {1, 2, 3, 4, 5, 6}", function(done) {
    chai.request(server.app)
      .get("/roll")
      .end(function(error, response) {
        chai.assert.equal(response.status, 200, "Status should be 200");

        const rolledNumber = parseInt(response.text, 10);
        chai.assert.isNotNaN(rolledNumber, "Response must be a parsable number");
        chai.assert.include([1, 2, 3, 4, 5, 6], rolledNumber, "Returned roll must be between 1 and 6");
        done();
      });
  });
});

// -----------------------------------------------------------------
// Exercise 6: GET /greeting Integration Test
// -----------------------------------------------------------------
suite("Exercise 6: Suite routes - GET /greeting", function() {
  test("Test GET /greeting returns 200 and a valid greeting", function(done) {
    chai.request(server.app)
      .get("/greeting")
      .end(function(error, response) {
        chai.assert.equal(response.status, 200);
        chai.assert.match(response.text, /Good (Morning|Afternoon|Evening)/);
        done();
      });
  });
});

// -----------------------------------------------------------------
// Exercise 7: Extended Calculator API Integration Tests
// -----------------------------------------------------------------
suite("Exercise 7: Suite routes - Calculator REST API", function() {
  test("Test GET /calc/add returns correct JSON result", function(done) {
    chai.request(server.app)
      .get("/calc/add?a=15&b=25")
      .end(function(error, response) {
        chai.assert.equal(response.status, 200);
        chai.assert.equal(response.body.result, 40);
        done();
      });
  });

  test("Test GET /calc/divide returns 400 when dividing by zero", function(done) {
    chai.request(server.app)
      .get("/calc/divide?a=10&b=0")
      .end(function(error, response) {
        chai.assert.equal(response.status, 400);
        chai.assert.equal(response.body.error, "Division by zero");
        done();
      });
  });
});
