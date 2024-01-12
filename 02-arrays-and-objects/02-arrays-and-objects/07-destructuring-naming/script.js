// Setting object properties with the same name as a variable:Đặt thuộc tính đối tượng có cùng tên với một biến
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age,
};

console.log(person.age);

// Destructuring object properties:Phá hủy thuộc tính của đối tượng

const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John',
    },
};

const {
    id: todoId, // rename id to todoId:đổi tên id thành todoId
    title,
    user: { name }, // destructuring multiple levels:phá hủy nhiều cấp độ
} = todo;

console.log(todoId);

// Destructuring arrays & using the rest/spread operator:Phá hủy mảng và sử dụng toán tử còn lại/trải rộng
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);