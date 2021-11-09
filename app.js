//const firstName = require("./utils");

//const add = require("./utils");

const getNotes = require("./notes");

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
