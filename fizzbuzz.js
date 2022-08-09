"use strict";

// function fizzbuzz(start, end) {
//   for (let i = 1; i < 101; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
//   }
// }
// fizzbuzz(1, 100);

// module.exports = fizzbuzz;

function fizzbuzz(number) {
  if (number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else if (number % 3 == 0) {
    return "Fizz";
  } else if (number % 5 == 0) {
    return "Buzz";
  } else {
    return number;
  }
}

module.exports = fizzbuzz;

function helpoer() {
  console.log("This is a helper function");
}
