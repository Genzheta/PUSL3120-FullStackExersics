const chai = require("chai");
const { sayHello } = require("../functions");

suite("Exercise 1: sayHello Unit Tests", function() {
  test("returns 'Hello Mark' when passed 'Mark'", function() {
    const expected = "Hello Mark";
    const actual = sayHello("Mark");
    chai.assert.equal(actual, expected, "sayHello should return 'Hello Mark'");
  });

  test("returns 'Hello Alice' when passed 'Alice'", function() {
    const expected = "Hello Alice";
    const actual = sayHello("Alice");
    chai.assert.equal(actual, expected);
  });
});
