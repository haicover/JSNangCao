let x;

// Creating an object:Tạo một đối tượng
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
};
console.log(person);
// Accessing object properties:Truy cập thuộc tính đối tượng
x = person.name; // Dot notation:Ký hiệu dấu chấm
x = person['age']; // Bracket notation:Ký hiệu ngoặc
x = person.address.state;
x = person.hobbies[0];

// Updating properties:Đang cập nhật thuộc tính
person.name = 'Jane Doe';
person['isAdmin'] = false;

// Deleting properties:Xóa thuộc tính
delete person.age;

// Create new properties:Tạo thuộc tính mới
person.hasChildren = true;

// Add functions:Thêm chức năng
person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words:Phím có nhiều từ
const person2 = {
    'first name': 'Brad',
    'last name': 'Traversy',
};

x = person2['first name'];

console.log(x);