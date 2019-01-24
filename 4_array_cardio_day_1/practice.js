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


const buyFruits = [
    {id: 1, fruit: 'apple', quantity: 15, price: 20},
    {id: 2, fruit: 'kiwi', quantity: 5, price: 10},
    {id: 3, fruit: 'banana', quantity: 6, price: 12},
    {id: 4, fruit: 'stawberry', quantity: 25, price: 100}
]

const myfruits = buyFruits.map( buy => { return {name: buy.fruit, price: buy.price} } );
const filter = myfruits.filter( item => item.name === 'apple')
const reduce = buyFruits.reduce( (a, b) => a.quantity > b.fruit.quantity ? {name: a.fruit, price: a.price} : {name: b.fruit, price: b.price} );
const sortPrice = myfruits.sort( (a , b) => a.price < b.price ? 1 : -1 );
const amount = myfruits.reduce( (total, next) => { return total + next.price }, 0); // total is undefined, so we need to add zero in the end.
console.log(myfruits);
console.log(filter);
console.log(reduce);
console.log(sortPrice);
console.log(amount);