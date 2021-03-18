// Write a function that takes in an array of numbers and returns its sum.

// function findSum(numbers) {
//   var sum = 0;
//   numbers.forEach(function (number) {
//     sum = number + sum;
//   });
//   return sum;
// }
// console.log(findSum([3,2,1,55, 100]));

// // 2. Write a function that takes in an array of strings and returns the smallest string.
// function smallestString(strings) {
//   var result = "";
//   strings.forEach(function (string) {
//     result = string;
//     if (string.length < result.length) {
//       string = result;
//     }
//   });
//   return result;
// }
// console.log(smallestString(["hello", "hi", "h"]));
// // 3. Write a function that takes in an array of numbers and returns a new array with the numbers in reverse order.
// function reverseOrder(numbers) {
//   var reverse = [];
//   var i = (numbers.length - 1);
//   // while (i >= 0) {
//   //   reverse.push(numbers[i]);
//   numbers.forEach(function (number) {
//     reverse.push(numbers[i]);
//     i--;
//   });
//   return reverse;
// }
// console.log(reverseOrder([2, 4, 6, 8]));
// // 4. Write a function that takes in an array of words and returns the number of words that begin with the letter “a”.
function aWords(words) {
  var result = 0;
  words.forEach(function (word) {
    if (word[0] === "a") {
      result++;
    }
  });
  return result;
}
console.log(aWords(["apple", "pickle", "beer", "alien"]));
// 5. Write a function that takes in an array of strings and joins them together to make a single string separated by commas.
function joinStrings(strings) {
  var result = strings.join(",");
  return result;
}
console.log(joinStrings(["hello", "it's me"]));
// 6. Write a function that takes in an array of numbers and returns the product of all the numbers (each number multiplied by each other). 
// 7. Write a function that takes in an array of numbers and returns the two smallest numbers.
// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.
// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.
// 10. Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.
// BONUS PROBLEMS
// Write a function that accepts a string and returns whether it’s a palindrome. 
// Write a function to generate/print/store the first “n” prime numbers.
// Given a tic-tac-toe board (matrix of 3 x 3), write a function that can check to see whether X or O won. (edited) 

