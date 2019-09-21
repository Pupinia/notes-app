const chalk = require("chalk");
const yargs = require("yargs");
const {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
} = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

// add, remove, read, list
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    addNote(argv.title, argv.body);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title to delete",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    removeNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "List a notes",
  handler() {
    listNotes();
  }
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Read a note",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    readNote(argv.title);
  }
});

yargs.parse();
