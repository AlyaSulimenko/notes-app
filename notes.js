const notes = [
  {
    title: "my next trip",
    body: "I would like to go to Spain",
  },
  {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better.",
  },
  {
    title: "Office modification",
    body: "Get a new seat",
  },
];

const sortNotes = function (array) {
  array.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
      return 1;
    } else {
      return 0;
    }
  });
};

const findNote = function (array, elTitle) {
  return array.find(function (arrayEl, index) {
    return arrayEl.title.toLowerCase() === elTitle.toLowerCase();
  });
};

const findNotes = function (array, query) {
  return notes.filter(function (arrayEl, index) {
    const isTitleMatch = arrayEl.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const isBodyMatch = arrayEl.body
      .toLowerCase()
      .includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

// console.log(findNotes(notes, 'eating'))
// const note = findNote(notes, 'some other office modification')
// console.log(note)

sortNotes(notes);
console.log(notes);
