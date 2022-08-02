const myBirthday = new Date("August 5 1986 00:00:00");
const myTimestamp = myBirthday.getTime();

const myLoveBirthday = new Date("March 29 1987 00:00:00");
const hisTimestamp = myLoveBirthday.getTime();

if (myTimestamp < hisTimestamp) {
  console.log(myBirthday.toString());
} else {
  console.log(myLoveBirthday.toString());
}

const myBDay = dayjs();
console.log(myBDay());
myBDay.subtract(36, "years").add(4, "days");
console.log(myBDay.format("MMM D, YYYY"));
