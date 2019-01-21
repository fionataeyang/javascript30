const fruits = [
    {id: 1, fruit: 'apple', quantity: 100, price: 1.99, origin: 'USA'},
    {id: 2, fruit: 'banana', quantity: 60, price: 1.45, origin: 'Thailand'},
    {id: 3, fruit: 'kiwi', quantity: 25, price: 1.5, origin: 'Australia'},
    {id: 4, fruit: 'strawberry', quantity: 55, price: 2, origin: 'French'},
    {id: 5, fruit: 'peach', quantity: 30, price: 6, origin: 'Japan'},
    {id: 6, fruit: 'grape', quantity: 150, price: 3, origin: 'Italy'}
]

function findItem(quantity, price, arr) {
    return arr.filter(item => item.quantity >= quantity && item.price <= price);
}

console.table( findItem(50, 2, [...fruits] ));