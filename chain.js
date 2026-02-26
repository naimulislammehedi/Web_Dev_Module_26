const employee = {
    name: 'John Doe', 
    1: 'dek one', 
    'home-address': '123 Main St', 
    position: 'Software Engineer', 
    salary: 5000, 
    family: {
        father: 'Richard Doe', 
        // mother: {
        //     name: 'Jane Doe', 
        //     age: 55
        // }
    },
};

console.log(employee.family.mother.age)
console.log(employee.family?.mother?.age)