//const firstName = require("./utils");
//const add = require("./utils");
const getNotes = require("./notes");
const validator = require("validator");

console.log(validator.isEmail("gino@gmail.com")); //true
console.log(validator.isEmail("gmail.com")); //false

console.log(validator.isURL("https://github.com")); //true
console.log(validator.isURL("https:/github.com")); // false

// const fs = require("fs");
// fs.writeFileSync("notes.txt", "Author: Gino.");
// fs.appendFileSync("notes.txt", "\nIntro to my life");

//console.log(firstName);
// const sum = add(5, 7);
// console.log(sum);

const message = getNotes();
console.log(message);
