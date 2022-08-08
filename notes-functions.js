//check for existing saved data in Local Storage
"use strict";

const getSavedNotes = () => {
  const notesJSON = localStorage.getItem("notes"); //trying to read data from local storage
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (error) {
    return [];
  }
};
// remove note
const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id);
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};
// Generate the DOM structure for a note
const generateNoteDOM = (note) => {
  const noteEl = document.createElement("div");
  const noteBtn = document.createElement("button");
  const noteText = document.createElement("a");

  //button element
  noteBtn.textContent = "X";
  noteEl.appendChild(noteBtn);
  noteBtn.addEventListener("click", (e) => {
    removeNote(note.id);
    saveNotes(notes);
    renderNotes(notes, filters);
  });

  if (note.title.length > 0) {
    noteText.textContent = note.title;
  } else {
    noteText.textContent = "Unnamed note";
  } // if note.title exists, we put it as noteEl, if no noteEl will show "unnamed note"
  noteText.setAttribute("href", `/edit.html#${note.id}`);
  noteEl.appendChild(noteText);

  return noteEl;
};
//Save notes to local storage
const saveNotes = (notes) => {
  localStorage.setItem("notes", JSON.stringify(notes));
};
// Sort notes in one of 3 ways

const sortNotes = (notes, wayToSort) => {
  if (wayToSort === "byEdited") {
    return notes.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (wayToSort === "byCreated") {
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (wayToSort === "alphabetical") {
    return notes.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) {
        return -1;
      } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  }
};

//Render notes that match filters
const renderNotes = (notes, filters) => {
  notes = sortNotes(notes, filters.sortBy);

  //1. creating a filtered array with elements which titles include symbols from filters.searchText
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  );
  //2. Clearing the #notes div
  document.querySelector("#notes").innerHTML = " ";
  //3. filtered notes are shown in body of page one by one
  filteredNotes.forEach((note) => {
    const noteEl = generateNoteDOM(note);
    document.querySelector("#notes").appendChild(noteEl);
  });
};
