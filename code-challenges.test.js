// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
// From Developer Chris
// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe ("fibFxn", () => {
  it ('takes a number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence', () => {
    expect (fibFxn(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect (fibFxn(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// FAIL  ./code-challenges.test.js
// fibFxn
//   ✕ takes a number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence

// ● fibFxn › takes a number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence

//   ReferenceError: fibFxn is not defined

// b) Create the function that makes the test pass.
// PSEUDOCODE
// Use red-green refactor process to write test for the given prompt
// create fxn called fibFxn
// input: number greater than 2
// output: array of input length filled with Fibonacci sequence
// initialize empty array. set first num to 0, second num to 1
// iterate through array using for loop with starting index 0 and stop index at < inputted number + 1
// each iteration adds the first and second num together and assigns the sum to next num, then reassigns first num to second num and second num to next num to create chain of adding the previous two numbers of whatever index you are on


// FUNCTION
// const fibFxn = (n) => {
//   let fibArr = []
//   let firstNum = 0
//   let secondNum = 1
//   for(let i=0; i<n; i++) {
//     fibArr.push(secondNum)
//     let nextNum = firstNum + secondNum
//     firstNum = secondNum
//     secondNum = nextNum
//     console.log(fibArr)
//   }
//   return fibArr
// }

// PASS  ./code-challenges.test.js
// fibFxn
//   ✓ takes a number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)

// REFACTOR
// start with an array that has 2 values [1, 1]
// for loop will begin count at 2 because that is the next index that will be provided
// the range of the for loop will be less than the parameter - 2 because there will already be two values in the array

const fibFxn = (n) => {
  let fibArr = [1, 1]
  for(let i = 0; i < n-2; i++) {
    fibArr.push(fibArr[i] + fibArr[i + 1])
  }
  return fibArr
}

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values
// From Developer Dave
// a) Create a test with expect statements for each of the variables provided.

describe("orderObject", () => {
  it("takes in an object and returns an array of numbers sorted from smallest the biggest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    expect(orderObject(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(orderObject(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  })
})

// Expected output: [15, 15, 20, 30, 30, 60, 90]
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// RED - GOOD FAILURE
// FAIL  ./code-challenges.test.js
// ● Test suite failed to run
//   ReferenceError: orderObject is not defined

// b) Create the function that makes the test pass.
// 2 different methods to loop through objects
// loop through an object's values by using the for...in statement/loop
// The Object.values() method returns the values of all properties in the object as an array
// Resource --- https://flexiple.com/javascript/loop-through-object-javascript/

// PSEUDOCODE and FUNCTION
// // Create a function that takes in an object
// const orderObject = (obj) => {
//   // create an empty array to hold the result
//   let orderedArray = []

//   // create a for loop that takes each value in the object 
//   for (let val in obj) {
//   // add the object values to the empty orderedArray
//     orderedArray.push(obj[val])
//   // sorts the values from smallest to biggest
//     orderedArray = orderedArray.sort((a, b) => a - b)
//   }
//   return orderedArray
// }

// GREEN - SUCCESS!
// PASS  ./code-challenges.test.js
// orderObject
//   ✓ takes in an object and returns an array of numbers sorted from smallest the biggest (2 ms)


// REFACTOR provided by Developer James
// PSEUDOCODE:
// Extract the values from each property in the object
// Create an array of number from the extracted values
// Sort the array from least to greatest

const orderObject = (studylog) => {
  return Object.values(studylog).sort((a, b) => a - b)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []
describe("transactions5", () => {
  it("takes in an array and returns array of accumlating sum", () => {
    const accountTransactions2 = [250, -89, 100, -96]
    // Expected output: [250, 161, 261, 165]

    const accountTransactions3 = []
    // Expected output: []
    expect(transactions5(accountTransactions1)).toEqual([100, 83, 60, 51])
    expect(transactions5(accountTransactions2)).toEqual([250, 161, 261, 165])
    expect(transactions5(accountTransactions3)).toEqual([])
  })
}) 

// transactions5
// ✕ takes in an array and returns array of accumlating sum (1 ms)

// ● transactions5 › takes in an array and returns array of accumlating sum

// ReferenceError: transactions5 is not defined

// b) Create the function that makes the test pass.
// PSEUDOCODE:
// declare a function named transactions5
// input: an array of numbers
// output: an array of the accumulating sum

// references ---- https://quickref.me/create-an-array-of-cumulative-sum; https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

// When researching new approaches ensure you understand the structure
// The reducer loops through the array by adding the value of the current index to the value of the previous index until there are no more values to add, which leaves one value in the array.
// The syntax of the reduce function is as such
// reduce((accumulator, currentValue, currentIndex) => { /* … */ })
    // accumulator - The value resulting from the previous calculation.

    // currentValue - The value of the current index on the iteration

    // currentIndex - The index position of currentValue in the array. 

// initialValue Optional
// In this case, the initial value needs to be set as [] on this syntax.

// within the ternary operator
// : [ /* … */ ], initialValue)
// initial value will be an empty array
// if there is an 0th index present which means there is one value in the array, then the function will output that value
// any other index will cause an iteration to add each value at the index until the array is left with one value
// code provided accomplishes the task in one line with a ternary operator. 

// const transactions5 = arr => 
// arr.reduce((a, b, i) => i === 0 ? [b] : [...a, b + a[i-1]], []) ;

// PASS  ./code-challenges.test.js
// fibFxn
//   ✓ takes a number greater than 2 and returns an array that length containing the numbers of the Fibonacci sequence (1 ms)
// orderObject
//   ✓ takes in an object and returns an array of numbers sorted from smallest the biggest (1 ms)
// transactions5
//   ✓ takes in an array and returns array of accumlating sum

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total


// REFACTOR using a different technique provided by Developer James
// PSEUDOCODE
// Input: an aray of numbers
// Output: an array of the accumlating sums of the original values of the inputted array's elements


// Declare a function called "arraySum" that takes an array as an argument
// Check to see if the array is not empty
// If the array is not empty, map through the elements
// Start a counter at zero, then add the value of each element and add that value to each subsequent element
// If the array is empty, return an empty array

const transactions5 = (array) => {
  return array.length > 0 ? array.map((sum = 0, n => sum += n)) : []
}