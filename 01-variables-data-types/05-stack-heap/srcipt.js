// Value is stored in the stack
const name = 'John';
const age = 30;

// Reference is stored in the heap
const person = {
    name: 'Brad',
    age: 40,
};

let newName = name;
newName = 'Jonathan';
let newAge = age;
newAge = 31;
let newPerson = person;
newPerson.name = 'Bradley';

console.log(name, newName); // John, Jonathan
console.log(age, newAge);
console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }