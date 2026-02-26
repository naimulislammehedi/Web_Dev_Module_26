const king = {
    name: 'Mufasa', 
    age: 55, 
    kingdom: 'Pride Lands'
}
// Object.freeze(king); 
delete king.age; 
delete king.kingdom; 
king.queen = 'Sarabi'; 
king.name = 'king simba'
console.log(king)

Object.seal(king); 
king.name = "Mehedi"; 
console.log(king); 