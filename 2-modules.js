// Modules
// EVERY FILE IN JS IS A MODULE
//ENCAPSULATED CODE

// const sayHi = (name) => {
//   console.log(`hello ${name}`);
// };
// sayHi("nhan");
// const number = 12;
// sayHi(number);

const name = require("./2.2-var"); // can go with {john,pet,number} = require(...)
const sayHi = require("./2.1-ultis");
require("./2.3-another_ultis");
console.log(name);
sayHi(name.john);
