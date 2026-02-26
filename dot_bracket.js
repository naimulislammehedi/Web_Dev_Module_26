const employee = {
    name: 'John Doe', 
    1: 'dek one', 
    'home-address': '123 Main St', 
    position: 'Software Engineer', 
    salary: 5000 
}; 

// dot notation 
console.log(employee.name); 
// console.log(employee.1); 
console.log(employee.salary)

// bracket notation 
console.log(employee['name']); 
console.log(employee[1]); 
console.log(employee["home-address"]); 

const money = employee['salary']; 
const key = 'position'; 
console.log(money)
console.log(employee[key]); 