// Exercise 1 & 4
function sayHello() {
  return "Hello world!!";
}

// Exercise 5: Roll a standard six-sided die returning an integer in {1, 2, 3, 4, 5, 6}
function roll() {
  return Math.floor(Math.random() * 6) + 1;
}

// Exercise 6: Greeting depending on system hour (0 - 23)
// 00:00 - 11:59: Good Morning
// 12:00 - 17:59: Good Afternoon
// 18:00 - 23:59: Good Evening
function getGreeting() {
  const currentHour = new Date().getHours();
  if (currentHour < 12) {
    return "Good Morning";
  } else if (currentHour < 18) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

// Exercise 7: Calculator Extended Operations
function add(a, b) {
  return Number(a) + Number(b);
}

function subtract(a, b) {
  return Number(a) - Number(b);
}

function multiply(a, b) {
  return Number(a) * Number(b);
}

function divide(a, b) {
  if (Number(b) === 0) {
    throw new Error("Division by zero");
  }
  return Number(a) / Number(b);
}

function power(base, exponent) {
  return Math.pow(Number(base), Number(exponent));
}

function root(number, n = 2) {
  if (Number(number) < 0 && Number(n) % 2 === 0) {
    throw new Error("Cannot take even root of negative number");
  }
  return Math.pow(Number(number), 1 / Number(n));
}

module.exports = {
  sayHello,
  roll,
  getGreeting,
  add,
  subtract,
  multiply,
  divide,
  power,
  root
};
