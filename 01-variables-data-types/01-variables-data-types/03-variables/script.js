// Ways to declare a variable
// `var`, `let`, & `const`

let firstName = 'John';
const lastName = 'Doe';
let age = 30;

console.log(firstName);
console.log(lastName);
console.log(age);

// Naming Conventions:Quy ước đặt tên
// - Only letters, numbers, underscores and dollar signs:Chỉ chữ cái,số,dấu gạch dưới và kí hiệu đô la
// - Can't start with a number:Không thể bắt đầu bằng số

// Multi-Word Formatting:Định dạng nhiều từ
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase

// We can re-assign `let` variables. If you change `age` to use `const`, you will get an error:Chúng ta có thể gán lại các biến 'let'.Nếu bạn thay đổi 'age' thành 'const', bạn sẽ gặp lỗi.
age = 31;
console.log(age);

// With let, we can declare a value without assigning a value:Với let,chúng ta có thể khai báo một giá trị mà không cần gán giá trị
let score;
score = 1;
console.log(score);

if (true) {
    score = score + 1;
}

console.log(score);

const x = 100;

// We can not re-assign a const variable:Chúng ta không thể gán lại biến const
// x = 200 // Will result in an error

// We can still manipulate arrays and objects using const:Chúng ta vẫn có thể thao tác với mảng và đối tượng bằng const
const arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

const person = {
    name: 'Brad',
};
person.name = 'John';
person.email = 'brad@gmail.com';
console.log(person);

// Declare multiple values at once:Khai báo nhiều giá trị cùng lúc
let a, b, c;

const d = 10,
    e = 20,
    f = 30;

console.log(d);
console.log(a);