

const products = [
    {id: 1, name: 'Lenovo', price: 65000},
    {id: 2, name: 'HP',     price: 45000},
    {id: 3, name: 'MSI',    price: 85000},
    {id: 4, name: 'Dell',   price: 55000},
    {id: 5, name: 'MacBook',price: 165000}
];

const names = products.map(product => product.name);
console.log(names);

const prices = products.map(price => price.price);
console.log(prices);

const big_price = products.filter(price => price.price > 80000);
console.log(big_price);

products.forEach(id => console.log(id.id));

const low_price = products.find(price => price.price < 80000);
console.log(low_price);

const price_total = products.reduce((accumulator, current) => accumulator + current.price, 0);
console.log(price_total);

