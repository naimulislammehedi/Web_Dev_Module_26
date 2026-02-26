console.log(add(10, 20)); 
// function declaration
function add(num1, num2) {
    return num1 + num2; 
}

// function expression 
const add2 = function(num1, num2) {
    return num1 + num2; 
}
console.log(add2(10, 20)); 

// arrow function 
const add3 = (num1, num2) => num1 + num2; 
console.log(add3(50, 60)); 

const multiple = (a, b) => a * b; 
const tenTimes = x => x * 10; 
const tenTimes2 = (x) => x * 10; 
const getPi = () => 3.14; 
const getRandom = () => Math.random(); 
const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f; 
const isEven = num => num % 2 === 0;

const doMath = (x, y) => {
    const sum = x + y; 
    const diff = x - y; 
    const result = sum * diff; 
    return result; 
}

const divide = (p, q) => p / q; 
console.log(divide(10, 2)); 

const subtract = (a, b) => a - b; 
console.log(subtract(10, 5)); 

