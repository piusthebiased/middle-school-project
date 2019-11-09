var Person = require("./class.js");

var person = new Person(50, true);

console.log("Person is an adult is: " + person.isAdult());
console.log("Person can have bank account is: " + person.canHaveBankAccounts());
person.setAge(process.argv[2]);
console.log("Person is an adult is: " + person.isAdult());
console.log("Person can have bank account is: " + person.canHaveBankAccounts());