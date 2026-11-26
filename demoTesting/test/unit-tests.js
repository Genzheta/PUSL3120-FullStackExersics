const chai = require("chai");
const sinon = require("sinon");
const functions = require("../functions");

// -----------------------------------------------------------------
// Exercise 4: Unit Test sayHello
// -----------------------------------------------------------------
suite("Exercise 4: Suite sayHello Unit Tests", function() {
  test("Test sayHello returns 'Hello world!!'", function() {
    const expected = "Hello world!!";
    const actual = functions.sayHello();
    chai.assert.equal(actual, expected);
  });
});

// -----------------------------------------------------------------
// Exercise 5: Unit Test roll (Slide 35)
// -----------------------------------------------------------------
suite("Exercise 5: Suite Dice Roll Unit Tests", function() {
  test("roll returns an integer from the set {1, 2, 3, 4, 5, 6}", function() {
    // Run multiple times to verify random distribution bounds
    for (let i = 0; i < 50; i++) {
      const result = functions.roll();
      chai.assert.isNumber(result, "Result should be a number");
      chai.assert.isTrue(Number.isInteger(result), "Result should be an integer");
      chai.assert.include([1, 2, 3, 4, 5, 6], result, "Result must be one of {1, 2, 3, 4, 5, 6}");
    }
  });
});

// -----------------------------------------------------------------
// Exercise 6: Unit Test Greeting with Sinon Fake Timers (Slide 36)
// -----------------------------------------------------------------
suite("Exercise 6: Suite Time & Greeting Tests using Sinon Timers", function() {
  let clock;

  teardown(function() {
    if (clock) {
      clock.restore(); // Always restore system clock after each test
    }
  });

  test("should return 'Good Morning' before 12:00 (e.g. 09:30)", function() {
    clock = sinon.useFakeTimers(new Date(2026, 10, 26, 9, 30));
    const greeting = functions.getGreeting();
    chai.assert.equal(greeting, "Good Morning");
  });

  test("should return 'Good Afternoon' between 12:00 and 17:59 (e.g. 14:15)", function() {
    clock = sinon.useFakeTimers(new Date(2026, 10, 26, 14, 15));
    const greeting = functions.getGreeting();
    chai.assert.equal(greeting, "Good Afternoon");
  });

  test("should return 'Good Evening' after 18:00 (e.g. 20:45)", function() {
    clock = sinon.useFakeTimers(new Date(2026, 10, 26, 20, 45));
    const greeting = functions.getGreeting();
    chai.assert.equal(greeting, "Good Evening");
  });

  test("sinon mock time verifies fake date vs restored real date (Slide 19)", function() {
    clock = sinon.useFakeTimers();
    clock.setSystemTime(new Date(2021, 2, 12, 23, 11));
    const mockDate = new Date();
    clock.restore();

    const realDate = new Date();
    chai.assert.notEqual(mockDate.getFullYear(), realDate.getFullYear());
  });
});

// -----------------------------------------------------------------
// Exercise 7: Extended Math Functions Unit Tests (Slide 37)
// -----------------------------------------------------------------
suite("Exercise 7: Suite Extended Math Unit Tests", function() {
  test("subtract function handles positive, negative and zero results", function() {
    chai.assert.equal(functions.subtract(10, 4), 6);
    chai.assert.equal(functions.subtract(4, 10), -6);
    chai.assert.equal(functions.subtract(5, 5), 0);
  });

  test("divide function computes quotient correctly", function() {
    chai.assert.equal(functions.divide(12, 3), 4);
    chai.assert.closeTo(functions.divide(10, 3), 3.333, 0.001);
  });

  test("divide function throws error when dividing by zero", function() {
    chai.assert.throws(function() {
      functions.divide(5, 0);
    }, "Division by zero");
  });

  test("power function computes exponentiation correctly", function() {
    chai.assert.equal(functions.power(2, 3), 8);
    chai.assert.equal(functions.power(5, 0), 1);
    chai.assert.equal(functions.power(4, 0.5), 2);
  });

  test("root function computes square and higher roots", function() {
    chai.assert.equal(functions.root(16, 2), 4);
    chai.assert.equal(functions.root(27, 3), 3);
  });

  test("root function throws on even root of negative number", function() {
    chai.assert.throws(function() {
      functions.root(-16, 2);
    }, "Cannot take even root of negative number");
  });
});
