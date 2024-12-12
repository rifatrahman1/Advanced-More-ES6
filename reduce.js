

const numbers = [2, 4, 5, 8, 6];

const total = numbers.reduce( (previous, current) => previous + current, 0);
console.log(total);

const sum = numbers.reduce( (previous, current) => previous + current, 5);
console.log(sum);