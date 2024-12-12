
const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'}
];

const senior = instructor.filter(senior => senior.position === 'Senior');
console.log(senior)