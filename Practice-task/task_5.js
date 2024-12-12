
const numbers = [33, 50, 79, 78, 90, 101, 30];

const filter = numbers.filter(number => number % 10 === 0);
const find = numbers.find(number => number % 10 === 0);
console.log(filter);
console.log(find);