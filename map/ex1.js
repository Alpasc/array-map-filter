/* Array.prototype.map - Exercise 1

* Write the CONTENTS of the `getStringsLength` function
* It receives an array of strings as an argument
* Inside the function, use map on the array of strings, to process each string this way:
  if you get the string STR of length LEN as an input (to map's function parameter),
  you must return "STR contains N characters" as an output
* As usual: FIRST OF ALL, focus on writing the function that processes ONE string...
  Then you only need to use this function with map.

Sample INPUT array (strings) for getStringsLength:
  [
    'Chicken',
    'Bacon',
    'Tofu',
    'Mayonnaise'
  ]

Expected OUTPUT for this sample array:
  [
    'Chicken contains 7 characters',
    'Bacon contains 5 characters',
    'Tofu contains 4 characters',
    'Mayonnaise contains 10 characters'
  ]

*/


// i = 

/* function getLength(strings) {
  return strings.length;
}


function getStringsLength(strings) {
  const len = strings.length;
  return len.map(strings + " contains " + len + "characters");
} */

// function getLength(strings) {
//   return strings.length;
// }

// function getStringsLength(strings) {
//   return strings.map(food => `${food} contains ${food.length} characters`);
// }

function getStringsLength(strings) {
  const arr = [];
  for (let x = 0; x < strings.length; x++) {
    arr.push(`${strings[x]} contains ${strings[x].length} characters`)
  }
  return arr
}

/* var numbers = [1, 2, 3, 4];
var new_numbers = numbers.map(function(number){
     return number * 2;
});
console.log("Les nombres doublés sont", new_numbers); // [2, 4, 6, 8]*/




// If you need, you can always visualize the result with a console.log.
// In that case, uncomment the line below (you can also add your own
// console.log INSIDE the function).
// Instead of running `npm test`, you can then use `node map/ex1`
// (you still need to run `npm test` to make sure you did right).

// console.log(getStringsLength(['Cat', 'Lion', 'Tiger', 'Jaguar', 'Leopard']));

// DON'T TOUCH THIS!
module.exports = getStringsLength;
