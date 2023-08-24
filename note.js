const fs = require("fs");
//const path = require("path");
const chalk = require("chalk");
const getNotes = function () {
  return "Your Notes";
};

const addNote = function (title, body) {
  const Notes = loadNotes();

  if (!Notes.some((note) => note.title == title)) {
    Notes.push({
      title: title,
      body: body,
      mk,
    });
  }
  const notesJason = JSON.stringify(Notes);

  saveNOtes(notesJason);
};
const saveNOtes = (notes) => {
  fs.writeFileSync("../playground/1-json.json", notes);
};
const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync("../playground/1-json.json").toString());
  } catch (e) {
    return e;
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const removeList = notes.filter((note) => note.title !== title);
  saveNOtes(JSON.stringify(removeList));
  if (notes.length === removeList.length) {
    console.log(chalk.bgRed("note not removed"));
  } else {
    console.log(chalk.bgGreen("note removed"));
  }
};
const ListNotes = () => {
  const notes = loadNotes();
  console.log(chalk.bgGreen("Your List:"));
  return notes.forEach((note) => {
    console.log(note.title);
  });
};
const readNote = (title) => {
  const notes = loadNotes();
  const res = notes.find((note) => note.title === title);
  console.log(chalk.bgGreen(res.title));
  console.log(chalk.bgRed(res.body));
};
module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  ListNotes: ListNotes,
  readNote: readNote,
};
