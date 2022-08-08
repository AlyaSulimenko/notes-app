"use strict";

const titleEl = document.querySelector("#note-title");
const bodyEl = document.querySelector("#note-body");
const removeBtn = document.querySelector("#remove_note_btn");
const dateEl = document.querySelector("#last-edited");

const noteId = location.hash.substring(1);
let notes = getSavedNotes(); //cause we don't connnect notes-app.js to edit.html & need the array once more here
let note = notes.find((note) => note.id === noteId);

if (!note) {
  location.assign("/index.html");
}

const now = new Date();
const updatedAt = now.getTime();

titleEl.value = note.title;
bodyEl.value = note.body;
dateEl.textContent = updateInfo(note);

titleEl.addEventListener("input", (event) => {
  note.title = event.target.value;
  note.updatedAt = updatedAt;
  dateEl.textContent = updateInfo(note);
  saveNotes(notes);
});

bodyEl.addEventListener("input", (event) => {
  note.body = event.target.value;
  note.updatedAt = updatedAt;
  dateEl.textContent = updateInfo(note);
  saveNotes(notes);
});

removeBtn.addEventListener("click", (event) => {
  removeNote(note.id);
  saveNotes(notes);
  location.assign("/index.html");
});

window.addEventListener("storage", (event) => {
  if (event.key === "notes") {
    notes = JSON.parse(event.newValue);
    let note = notes.find((note) => note.id === noteId);

    if (!note) {
      location.assign("/index.html");
    }

    titleEl.value = note.title;
    bodyEl.value = note.body;
    dateEl.textContent = updateInfo(note);
  }
});
