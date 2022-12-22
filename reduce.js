// const numbers = [1000, 90, 110, 81, 19];
// const sum = numbers.reduce(function (sum, number) {
//   const updatedSum = sum + number;
//   return updatedSum;
// }, 0);
// console.log(sum, "sum"); //1300

// const numbers = [1000, 90, 110, 81, 19];
// const sum = numbers.reduce((sum, number) => {
//   const updatedSum = sum + number;
//   return updatedSum;
// }, 0);
// console.log(sum, "sum"); //1300

const numbers = [1000, 90, 110, 81, 19];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum, "sum"); //1300
