let x;

// Array Literal:Mảng theo nghĩa đen
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];
console.log(numbers);
console.log(mixed);
// Array Constructor:Trình tạo mảng
const fruits = new Array('apple', 'grape', 'orange');
console.log(fruits);
// Get value by index:Nhận giá trị theo chỉ mục
x = numbers[0];
console.log(x);
x = numbers[0] + numbers[3]; ///(Kết quả 12+29)
console.log(x);
x = `My favorite fruit is an ${fruits[2]}`;
console.log(x);
x = numbers.length;
console.log(x);
fruits[2] = 'pear';
console.log(fruits);
// length is not read-only:Độ dài không chỉ đọc
// fruits.length = 2;

fruits[3] = 'strawberry';
console.log(fruits);
// Using the length as the index will always add on the the end:Sử dụng độ dài làm chỉ mục sẽ luôn thêm vào cuối
fruits[fruits.length] = 'blueberry';
console.log(fruits);
fruits[fruits.length] = 'peach';
x = fruits;

console.log(x);