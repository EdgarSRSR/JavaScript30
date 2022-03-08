const add = function(a,b) {

  return a+b;
	
};

const subtract = function(a,b) {

  return a-b;
	
};

const sum = function(array) {
	
  let sum = 0;

  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }

  return sum;


};

const multiply = function(array) {

  let multiplication = 1;

  for(let i = 0; i < array.length; i++){
    multiplication *= array[i];
  }

  return multiplication;

};

const power = function(a,b) {

  let power = a;
  for(let i = 1; i < b; i++ ){
    power *= a;
  }

  return power;
	
};

const factorial = function(a) {

  let result = 1;


  for(let i = a; i > 0 ; i--){
    result *= i;
  }
  return result;

	
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
