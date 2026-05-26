const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(num) {
  let sum = 0;
	for(let i=0; i<num.length; i++){
    sum += num[i];
  }
  return sum;
};

const multiply = function(num) {
  let mul = 1;
	for(let i=0; i<num.length; i++){
    mul *= num[i];
  }
  return mul;
};

const power = function(base, exp) {
  return base ** exp;
};

const factorial = function(num) {
  let fact = 1;
  if (num == 0) return fact;
  for(let i=1; i<=num; i++){
    fact *= i;
  }
  return fact;
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
