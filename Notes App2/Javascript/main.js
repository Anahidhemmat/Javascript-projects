import NotesAPI from "./NotesAPI.js"


// NotesAPI.saveNote({
//     id: 663698,
//     title: "updated",
//     body: "i am a note"
// });

NotesAPI.deleteNote(24113);
console.log(NotesAPI.getAllNotes());