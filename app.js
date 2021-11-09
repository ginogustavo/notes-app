//const firstName = require("./utils");
//const add = require("./utils");
const getNotes = require("./notes");
const validator = require("validator");

console.log(validator.isEmail("gino@gmail.com")); //true
console.log(validator.isEmail("gmail.com")); //false

console.log(validator.isURL("https://github.com")); //true
console.log(validator.isURL("https:/github.com")); //false

// const fs = require("fs");
// fs.writeFileSync("notes.txt", "Author: Gino.");
// fs.appendFileSync("notes.txt", "\nIntro to my life");

//console.log(firstName);
/**
 * With just rquire(which executes its code) but without a reference,
 * the log will fail, because the name is not refered.
 * All Modules has their own Scope.
 * For that we need to export all context from utils to outside world
 */

// const sum = add(5, 7);
// console.log(sum);

const message = getNotes();
console.log(message);

// 1. install the validator.js module
// $ npm i validator@10.8.0
// - it updates package.json by adding dependency
// - it creates package-lock.json (extra info making npm a bit faster and secure)
// - it creates node_modules directory with the libraries

/**
 *  Extra info in package-lock.json if we were to install the
 *  library again, maintained by npm :
 *    "version": "10.8.0",    --> exact version we installed
 *    "resolved": "http//re", --> where it was fetched
 *    "integrity": "sha52-mXX --> sha# making sure we are getting the exact code
 */
