const product = {
    name: 'iPhone', 
    price: 799, 
    description: 'A smatphone by Apple'
}

const newPrice = product.price + 100; 
const phoneName = `this is ${product.name}`; 

// const price = product.price; 
// const name = product.name; 

// const product1 = {
//     name: 'iPhone', 
//     price: 799, 
//     brand: 'Apple'
// }
const price = 555; 

const {name, price: phonePrice, camera= '12MP'} = {
    name: 'iPhone', 
    price: 799, 
    brand: 'Apple', 
    camera: '48MP'
}; 

console.log(name)
console.log(phonePrice)

const [first, second] = [10, 20, 30, 50]; 
console.log(first, second)