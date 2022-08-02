const titleEl = document.querySelector("#note-title");
const bodyEl = document.querySelector("#note-body");
const removeBtn = document.querySelector("#remove_note_btn");
const dateEl = document.querySelector("#last-edited");

const noteId = location.hash.substring(1);
let notes = getSavedNotes(); //cause we don't connnect notes-app.js to edit.html & need the array once more here
let note = notes.find(function (note) {
  return note.id === noteId;
});

if (note === undefined) {
  location.assign("/index.html");
}

const now = new Date();
const updatedAt = now.getTime();

titleEl.value = note.title;
bodyEl.value = note.body;
dateEl.textContent = updateInfo(note);

titleEl.addEventListener("input", function (event) {
  note.title = event.target.value;
  note.updatedAt = updatedAt;
  saveNotes(notes);
});

bodyEl.addEventListener("input", function (event) {
  note.body = event.target.value;
  note.updatedAt = updatedAt;
  saveNotes(notes);
});

removeBtn.addEventListener("click", function (event) {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("/index.html");
});

window.addEventListener("storage", function (event) {
  if (event.key === "notes") {
    notes = JSON.parse(event.newValue);
    let note = notes.find(function (note) {
      return note.id === noteId;
    });

    if (note === undefined) {
      location.assign("/index.html");
    }

    titleEl.value = note.title;
    bodyEl.value = note.body;
  }
});
