import NotesAPI from "./NotesAPI.js";

// NotesAPI.saveNotes({
//   id: 645254,
//   title: "The title has changed!",
//   body: "I am a new note.",
// });

NotesAPI.deleteNotes(645254);

console.log(NotesAPI.getAllNotes());
