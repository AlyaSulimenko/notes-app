const people = [
  { name: "Alya", age: 36 },
  { name: "Vika", age: 36 },
  { name: "Tymur", age: 7 },
];
const age = 7;
const findChild = people.findIndex((person) => person.age === age);

console.log(people[findChild].name);
