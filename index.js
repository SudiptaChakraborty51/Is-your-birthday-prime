var readlineSync = require("readline-sync");
var chalk = require("chalk");

var userName = readlineSync.question("What is your name? : ");

console.log("");
console.log(chalk.blue.bold("Welcome " + userName));
console.log(chalk.cyan.bold("We tell you if your birthday is prime number or not, check it!"));
console.log("");

var dob = readlineSync.question("Enter your date of birth : (dd-mm-yyyy) ");

dt = parseInt(dob.slice(0, 2));

console.log("");
console.log("..........................................");

let isPrime = true;
function checkPrimeNumber(dt) {
  if (dt === 0 || dt === 1) {
    console.log(chalk.red.bold("Oh no! your birthday is not a prime number"));
  }
  else {
    for (let i = 2; i <= dt / 2; i++) {
      if (dt % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (!isPrime) {
      console.log(chalk.red.bold("Oh no! your birthday is not a prime number"));
    } else {
      console.log(chalk.green.bold("Yay! your birthday is a prime number"));
    }
  }
}

if (dob.length != 10) {
  console.log("Enter valid date of birth!");
} else {
  checkPrimeNumber(dt);
}