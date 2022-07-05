//assigns my age to a variable
let myAge = 45;
//assigns the number of years that count as early years
let earlyYears = 2;
earlyYears *= 10.5;
//assigns a new variable where age is reduced by 2
let laterYears = myAge - 2;
//each year after the dogs 2nd birthday counts as 4 dog years
laterYears *= 4;
//combines the early and later years to calculate the age in dog years
let myAgeInDogYears = earlyYears + laterYears;
//stores a name as a variable and converts it to lower case characters
var myName = 'Egrel'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`);
