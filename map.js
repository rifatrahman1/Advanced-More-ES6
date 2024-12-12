

const numbers = [2, 4, 5, 8, 6];
const doubled = [];

// for (const number of numbers) {
//     const double = number * 2;
//     doubled.push(double);
// }
// console.log(doubled)

const number = numbers.map(n => n * 2);
console.log(number);