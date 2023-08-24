const chalk = require("chalk");
const yargs = require("yargs");
const note = require("./note");
//add
yargs.command({
  command: "add",
  describe: "add a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "the body of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    note.addNote(argv.title, argv.body);
  },
});
//remove
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "title for note u want to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    note.removeNote(argv.title);
  },
});

//list

yargs.command({
  command: "list",
  describe: "the list of titles for your notes",
  handler: () => {
    note.ListNotes();
  },
});
yargs.command({
  command: "read",
  describe: "find your note by title",
  builder: {
    title: {
      describe: "title of the note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    note.readNote(argv.title);
  },
});
yargs.parse();
