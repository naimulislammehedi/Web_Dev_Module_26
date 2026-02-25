function add(num1, num2) {
    const total = num1 + num2; 
    console.log(num1, num2, total); 
}

add(10, 20); 
add(10);

// default parameter 
function add2(num1, num2 = 0) {
    const total = num1 + num2; 
    console.log(num1, num2, total); 
}

add2(10, 60); 

function fullName(first, last = '') {
    const name = first + ' ' + last; 
    console.log(name); 
}

fullName('kamruzzaman', 'kamal')
fullName('kamruzzaman')