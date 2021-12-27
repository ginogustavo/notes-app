const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

// const command = process.argv[2];

// if (command === "add") {
//   console.log("Adding Note!");
// } else if (command === "remove") {
//   console.log("Removing Note!");
// }

//Customize yargs

yargs.version("1.1.0");

// add, remove, read, list
// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    console.log("Title: " + argv.title);
    console.log("Body: " + argv.body);
  },
});
//if you type --help it'll print out also this command

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "List notes",
  handler: function () {
    console.log("Listing notes");
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("Reading a note");
  },
});

yargs.parse();
// console.log(yargs.argv);
