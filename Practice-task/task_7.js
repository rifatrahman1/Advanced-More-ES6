
const people = [
    {name: 'Meena', age: 20},
    {name: 'Rina', age: 15},
    {name: 'Suchorita', age: 22}
];

let sum_of_age = 0;

for(let i = 0; i < people.length; i++) {
    sum_of_age += people[i].age
}
console.log(sum_of_age);

const reduce = people.reduce((accumulator, current) => accumulator + current.age, 0);
console.log(reduce)