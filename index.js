// 1) Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
const calculateSum = (a, b) => a + b;
console.log(calculateSum(20, 33));

// 2) Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
const isEven = (num) => num % 2 === 0;
console.log(isEven(-223));

// 3) Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
const findMax = (nums) =>
  nums.reduce((acc, num) => (num > acc ? num : acc), nums[0]);
console.log(findMax([222, 33, 44, 99, 37, 9, 65, 3, 7, 33, 777]));

// 4) Write a function named ‘reverseString’ that takes a string and returns the string reversed.
let reverseString = (str) => str.split("").reverse().join("");
console.log(reverseString("Ostad MERN Stack Course"));

// 5) Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
const filterOddNumbers = (nums) => nums.filter((num) => num % 2 !== 0);
console.log(filterOddNumbers([1, 3, 5, 4, 22, 44, 25, -333, 54, 77, 74 - 876]));

// 6) Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
const sumArray = (nums) => nums.reduce((acc, num) => acc + num, 0);
console.log(sumArray([5, 25, 45, 25, 66, 35, 24, 57, 6, 7, 56]));

// 7) Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
const sortArray = (nums) => {
  let newArray = [...nums];
  newArray.sort((a, b) => a - b);
  return newArray;
};
console.log(sortArray([5, 25, 45, 25, 66, 35, 24, 57, 6, 7, 56]));

// 8) Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
const capitalizeFirstLetter = (str) =>
  str.length > 0 ? str[0].toUpperCase() + str.slice(1) : "";
console.log(capitalizeFirstLetter("javscript is Awesome"));
