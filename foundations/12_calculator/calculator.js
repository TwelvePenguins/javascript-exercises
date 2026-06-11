const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  if (array.length == 0) {
    return 0
  }

	return array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  )
};

const multiply = function(...num) {
  let numbers = Array.from(arguments);
  return numbers.reduce(
    (accumulator, currentValue) => accumulator * currentValue
  )
};

const power = function(base, index) {
	return base ** index;
};

const factorial = function(input) {
  let output = 1;

	for (let i = input; i >= 1; i--) {
    output *= i
  }

  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
