
// data access

const data = [{id: 1, name: 'rifat', address: 'kochu khet'}, 5435,545];
// console.log(data[0].name && data[0].address)

const products = {
    count: 2345,
    data: [
        {id: 1, name: 'MSI Laptop', price: 65000},
        {id: 2, name: 'MacBook Laptop', price: 176000}
    ]
};

// console.log(products.data[1].price)

const user = {
    id: 435,
    name: 'Rifat',
    address: {
        street: {
            first: 'uttara, sector-7',
            second: 'dhanmondi-32',
            third: 'i no jani'
        },
        city: 'dhaka'
    }
}

console.log(user.address.street.first)