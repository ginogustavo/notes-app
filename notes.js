const fs = require("fs");
const chalk = require("chalk");
const getNotes = () => "Your Notes";

const addNote = (title, body) => {
  //loading the existing notes (stored as json), parsed them, add something new onto the array, saved it back to the system.
  const notes = loadNodes();

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    //push an object
    notes.push({
      title: title,
      body: body,
    });
    //save the data
    saveNotes(notes);
    console.log("New Note saved!");
  } else {
    console.log("Note title taken!");
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNodes = () => {
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
  const notes = loadNodes();
  const notesToKepp = notes.filter((note) => note.title != title);

  if (notes.length > notesToKepp.length) {
    saveNotes(notesToKepp);
    //console.log(chalk.bgGreen(`${title} removed!`));
    console.log(chalk.green.inverse(`${title} removed!`));
  } else {
    console.log(chalk.bgRed("No note found!"));
  }
};

//module.exports = getNotes;
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
