let notes = getSavedNotes();

const filters = { searchText: "" };

//to show full list
renderNotes(notes, filters);

//as for now puts into the notes array an object with empty properties ant puts the stringified version of it into local storage. Then rerenders the page
document.querySelector("#create-note").addEventListener("click", function (e) {
  const id = uuidv4();
  notes.push({ id: id, title: "", body: "" });
  saveNotes(notes);
  //renderNotes(notes, filters);
  location.assign(`/edit.html#${id}`);
});

// when typing in input, what we put becomes the new value of filters.searchText, then notes render with new filters
document
  .querySelector("#search-notes")
  .addEventListener("input", function (event) {
    filters.searchText = event.target.value;
    renderNotes(notes, filters);
  });

document.querySelector("#filter-by").addEventListener("change", function (e) {
  console.log(e.target.value);
});
//localStorage.clear();

window.addEventListener("storage", function (event) {
  if (event.key === "notes") {
    notes = JSON.parse(event.newValue);
    renderNotes(notes, filters);
  }
});
