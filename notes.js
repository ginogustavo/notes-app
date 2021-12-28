const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  //loading the existing notes (stored as json), parsed them, add something new onto the array, saved it back to the system.
  const notes = loadNotes();

  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title); //stops search when found one.

  //if not find the much the variable is = undefined.

  // if (duplicateNotes.length === 0) {
  // if (duplicateNote === undefined) {
  if (!duplicateNote) {
    //push an object
    notes.push({
      title: title,
      body: body,
    });
    //save the data
    saveNotes(notes);
    console.log(chalk.green.inverse("New Note saved!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  //defensive code (to validate file)
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return []; // This would be returned if we had an empty file
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKepp = notes.filter((note) => note.title != title);

  if (notes.length > notesToKepp.length) {
    saveNotes(notesToKepp);
    //console.log(chalk.bgGreen(`${title} removed!`));
    console.log(chalk.green.inverse(`${title} removed!`));
  } else {
    console.log(chalk.bgRed("No note found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue.inverse("Your Notes"));

  notes.forEach((note) => {
    console.log(chalk.blue(" - " + note.title));
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteFound = notes.find((note) => note.title === title);
  if (noteFound) {
    console.log(chalk.blue.inverse(noteFound.title));
    console.log(noteFound.body);
  } else {
    console.log(chalk.red("Not found!"));
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
