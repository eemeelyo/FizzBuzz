// FUnction number as parameter and return a string the string should correspont to the folowing

// when the integer is divsible by 3 return "fizz"
// Divisible by 5 return Buzz
// Divisible 3 and 5 return FizzBuzz
//Not divisible by 3 or 5 then return the integer by itself.

function fizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  } else if (number % 5 === 0) {
    return "Buzz";
  } else if (number % 3 === 0) {
    return "Fizz";
  } else {
    return number;
  }
}

module.exports = fizzBuzz;
