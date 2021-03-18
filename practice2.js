// # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].
function selectEvenItems (strings) {
  var result = [];
  var index = 0;
  strings.forEach(function (string) {
    if (index % 2 === 0) {
      result.push(string);
    }
    index++;
  });
  return result;
}
console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));

// # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.
function max (numbers) {
  var currentMax = numbers[0];
  numbers.forEach(function (number) {
    if (number > currentMax) {
      currentMax = number;
    }
  });
  return currentMax;
}

console.log(max([5, 4, 8, 1, 2]));
// # Write a method that accepts a number and returns its factorial. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
function factorial (number) {
  var result = 1;
  var currentNumber = number;
  while (currentNumber > 0) {
    result = (result * currentNumber);
    currentNumber = (currentNumber - 1);
  }  
  return result;
}
console.log(factorial(5));

// # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built into Ruby.
function descending(numbers) {
  var result = [];
  var i = numbers.length - 1;
  numbers.forEach(function (number) {
    result.push(numbers[i]);
    i--;
  });
  return result;
}
console.log(descending([1, 3, 5, 7]));

// # Write a method that accepts two arrays of numbers, and returns an array of every sum of every combination of single numbers from the first and second array. For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should return this array: [101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

