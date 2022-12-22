// const numbers = [1000, 90, 110, 81, 19];
// const sum = numbers.reduce(function (sum, number) {
//   const updatedSum = sum + number;
//   return updatedSum;
// }, 0);
// console.log(sum, "sum"); //1300

// ----------------------------------------------------------------------------------------------------------------------------------

// const numbers = [1000, 90, 110, 81, 19];
// const sum = numbers.reduce((sum, number) => {
//   const updatedSum = sum + number;
//   return updatedSum;
// }, 0);
// console.log(sum, "sum"); //1300

// ----------------------------------------------------------------------------------------------------------------------------------

// const numbers = [1000, 90, 110, 81, 19];
// const sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum, "sum"); //1300

// ----------------------------------------------------------------------------------------------------------------------------------

// /* this is our initial value i.e. the starting point */
// const initialValue = 0;

// // numbers array
// const numbers = [1000, 90, 110, 81, 19];

// /* reducer method that takes in the accumulator and next item */
// const reducer = (accumulator, item) => accumulator + item;

// // you can also write the function this way
// // const reducer = (accumulator, item) => {
// //   return accumulator + item;
// // };

// /* we give the reduce method our reducer function and our initial value */
// const total = numbers.reduce(reducer, initialValue);

// console.log(total, "total");

// ----------------------------------------------------------------------------------------------------------------------------------
