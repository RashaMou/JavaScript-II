// Remove duplicates from an array and return a new, duplicate-free array.

const array = [1, 2, 3, 2, 1, 8, 7]; // we use const because we are not changing the value of the original array

// METHOD 1: USING A FOR LOOP AND INDEXOF

// indexOf() returns the index of the first occurance of an item in an array. Returns -1 if 

let newArray = []; // we use let because we are modifying the new array

// let len = array.length // useful to declare this outside the for loop because then it doesn't have to keep recalculating 
// with every iteration

for(let i = 0; i < len; i++) {                    // iterate over each item in the array
  if(newArray.indexOf(array[i]) === -1) {         // returns 0, 1, 2, 1, 0, 8 and for each checks if it is already in newArray. It checks by seeing if it is equal to -1 (if it does not find a duplicate, then it returns -1)
    newArray.push(array[i]);                      // pushes the non-duplicate items to newArray
  }
}

console.log(newArray);
[1, 2, 3, 8, 7]

// METHOD 2: SORT AND REMOVE

// note: this method changes the order of items in the array.

array.sort();         // returns [1, 1, 2, 2, 3, 7, 8]
let _temp;            // creates a temporary variable to store each item in the array

for(let i = 0; i < array.length; i++) {
  if(array[i] !== _temp) {    // if the array item is NOT equal to temp
    newArray.push(array[i]);  // push that item into newArray
    _temp = array[i];         // and store that item into temp, so that when it loops, it checks to see if the next item is equal to the previous item. If it is, then it does nothing.
  }
}
console.log(newArray);
// [1, 2, 3, 7, 8]

// METHOD 3: SETS

// ES6 introduced a new data type called set. Set only stores unique values by default.

let newSet = new Set(array) // will return a set with only unique values.

// to convert the set into an array, use [... ] :

let newSet = [... new Set(array)]; 

