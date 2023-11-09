const num1 = 10;
const num2 = 15;

function addValue() {
  console.log(`the sum is: ${num1 + num2}`);
}

//module.exports.addValue = addValue(); // THis will invoke the function

// module.exports.FUNCTION_ANOTHER_NAME = addValue;
// module.exports.addValue;
// THose cmd will not invoke the function

addValue(); // there is no module.exports, but require this will also invoke the function
