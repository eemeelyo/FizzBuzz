const fizzBuzz = require("./fizzBuzz");

test("It should return Fizz", () => {
  expect(fizzBuzz(6)).toBe("Fizz");
});

test("It should return Buzz", () => {
  expect(fizzBuzz(25)).toBe("Buzz");
});

test("It should return FizzBuzz", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
});

test("It should return the number", () => {
  expect(fizzBuzz(16)).toBe(16);
});

test("It should return the number", () => {
  expect(fizzBuzz(0)).toBe("FizzBuzz");
});
