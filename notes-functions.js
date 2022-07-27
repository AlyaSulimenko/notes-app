//check for existing saved data in Local Storage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem("notes"); //trying to read data from local storage
  if (notesJSON !== null) {
    return JSON.parse(notesJSON); // if it exists (!==null), we convert notesJSON from string to array of objects
  } else {
    return [];
  }
};
// remove note
const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id === id;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1);
  }
};
// Generate the DOM structure for a note
const generateNoteDOM = function (note) {
  const noteEl = document.createElement("div");
  const noteBtn = document.createElement("button");
  const noteText = document.createElement("a");

  //button element
  noteBtn.textContent = "X";
  noteEl.appendChild(noteBtn);
  noteBtn.addEventListener("click", function (e) {
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
const saveNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

//Render notes that match filters
const renderNotes = function (notes, filters) {
  //1. creating a filtered array with elements which titles include symbols from filters.searchText
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  //2. Clearing the #notes div
  document.querySelector("#notes").innerHTML = " ";
  //3. filtered notes are shown in body of page one by one
  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note);
    document.querySelector("#notes").appendChild(noteEl);
  });
};
