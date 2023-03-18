// Arays

// PUSH
const arr = []; //empty array
arr.push('dog'); // ads an item to the end of the array
console.log(arr); //['dog']
console.log(arr.length);

arr.push("cat");
arr.push("mouse");

// console.log(arr); //['dog', 'cat', 'mouse']

// ---------------------------------------------------------------------------------------
// UNSHIFT
const arr2 = ['dog', 'cat'];
arr2.unshift('mouse'); // adds an item to the start of the array
// console.log(arr2); // ['mouse', 'dog', 'cat']


// ---------------------------------------------------------------------------------------
// SHIFT
const arr3 = ['dog', 'cat'];
arr3.shift(); // removes an item from the start
// console.log(arr3); // ['cat']

//---------------------------------------------------------------------------------------------
// MAP
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)  //apleand functia myFunction, map inmultuste cu 10 toate elem. array-ului

function myFunction(num) {
  return num * 10;
}

// console.log(newArr);

const numere = [1, 2, 3, 4, 5];
const numereLaPătrat = numere.map(function(număr) {
  return număr * număr;
});
// console.log(numereLaPătrat); // Output: [1, 4, 9, 16, 25]

//---------------------------------------------------------------------------------------------
//FILTER
//ex1
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
// console.log(result);

//ex2
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter(function(num) {
  return num % 2 === 0;
});
// console.log(evenNumbers); // Output: [2, 4]

//----------------------------------------------------------------------------------------------
//FIND

//ex1

const numbers3 = [1, 2, 3, 4, 5];
const evenNumber = numbers3.find(number => number % 2 === 0);
// console.log(evenNumber); // Output: 2
//----------------------------------------------------------------------------------------------
//EVERY

const fruits = ['apple', 'banana', 'orange', 'grape'];
const areAllDifferent = fruits.every((fruit, index, array) => array.indexOf(fruit) === index);
// console.log(areAllDifferent); // Output: true


const ages2 = [32, 33, 16, 40];
ages2.every(checkAge)
function checkAge(age) {
  return age > 18;
}

//----------------------------------------------------------------------------------------
const numb = [1, 3, 5, 7, 9];

const hasEvenNumber = numb.some(number => number % 2 === 0);

console.log(hasEvenNumber); // Output: false

//-------------------------------------------------------------------------------------------

const num = [1, 2, 3, 4, 5];

num.forEach((number) => {
  console.log(number * 2);
});