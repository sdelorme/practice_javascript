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