
// const numbers = [1, 3, 5, 7, 9];
// const array = [];

// for (const number of numbers) {
//      array.push(number + 1);
// }
// console.log(array);

const numbers = [1, 3, 5, 7, 9];
const array = [];

for(let i = 0; i < numbers.length; i++) {
    array.push(numbers[i] + 1);
}
console.log(array);

const players = [1, 3, 5, 7, 9];

const player = players.map(player => player + 1);
console.log(player)