let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let age = 22;

if (earlyRegister && age > 18) {
  raceNumber += 1000;
}

if (age > 18 && earlyRegister) {
  console.log(`Your race number is ${raceNumber} and you will race at 9:30am.`);
} else if (age > 18 && !earlyRegister) {
  console.log(`Your race number is ${raceNumber} and you will race at 11:00am.`);
} else if (age < 18) {
  console.log(`Your race number is ${raceNumber} and you will race at 12:30am.`);
} else {
  console.log(`Your race number is ${raceNumber}, please go to the registration desk.`);
}
