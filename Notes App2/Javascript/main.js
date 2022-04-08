import NotesView from "./NotesView.js";
import NotesAPI from "./NotesAPI.js";
// NotesAPI.saveNote({
//     id: 663698,
//     title: "updated",
//     body: "i am a note"
// });

// NotesAPI.deleteNote(24113);
// console.log(NotesAPI.getAllNotes());

const app = document.getElementById("app");

const view = new NotesView(app, {
  onNoteAdd() {
    console.log("add new note");
  },
  onNoteSelect(id) {
    console.log("note selected");
  },

  onNoteEdit(newTitle, newBody) {
    console.log(newTitle);
    console.log(newBody);
  },
});

view.updateNotesList(NotesAPI.getAllNotes());
