let x;

const name = 'John';
const age = 31;

// Concatenation:Nối
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';
console.log(x);
// Template Literals:Mẫu chữ
x = `Hello, my name is ${name} and I am ${age} years old`;
console.log(x);
// String Properties and Methods:Thuộc tính và phương thức chuỗi

// Creating a "string object" (JS does this automatically when using a propery or method on a primitive string):Tạo một "đối tượng chuỗi" (JS tự động thực hiện việc này khi sử dụng thuộc tính hoặc phương thức trên chuỗi nguyên thủy)
const s = new String('Hello World');
console.log(s);
x = typeof s;
console.log(x);
x = s.length;
console.log(x);
// Access value by key:Truy cập giá trị bằng từ khóa
x = s[0];
console.log(x);
// Shows the prototype of the string object. Shows the properties and methods:Hiển thị nguyên mẫu của đối tượng chuỗi.Hiển thị các thuộc tính và phương thức
x = s.__proto__;
console.log(x);
// Change case:Trường hợp thay đổi
x = s.toUpperCase();
console.log(x);
x = s.toLowerCase();
console.log(x);
// charAt() - returns the character at the specified index:charAt() - trả về ký tự tại chỉ mục đã chỉ định
x = s.charAt(0);
console.log(x);
// indexOf - returns the index of the first occurrence of a specified value in a string:indexOf - trả về chỉ mục của lần xuất hiện đầu tiên của một giá trị được chỉ định trong chuỗi
x = s.indexOf('d');
console.log(x);
// substring() - search a string for a specified value:chuỗi con() - tìm kiếm một chuỗi cho một giá trị được chỉ định
x = s.substring(2, 5);
console.log(x);
x = s.substring(7);
console.log(x);
// slice() - extracts a part of a string and returns a new string:slice() - trích xuất một phần của chuỗi và trả về một chuỗi mới
x = s.slice(-11, -6);
console.log(x);
// trim() - remove whitespace from beginning and end of string:Trim() - xóa khoảng trắng ở đầu và cuối chuỗi
x = '         Hello World';
console.log(x);
x = x.trim();
console.log(x);
// replace() - replace all instances of a string:thay thế () - thay thế tất cả các phiên bản của chuỗi
x = s.replace('World', 'John');
console.log(x);
// includes() - returns true if the string is found:bao gồm() - trả về true nếu tìm thấy chuỗi
x = s.includes('Hell');
console.log(x);
// valueOf() - returns the primitive value of a variable:valueOf() - trả về giá trị nguyên thủy của một biến
x = s.valueOf();
console.log(x);
// split() - returns an array of strings:Split() - trả về một chuỗi các chuỗi
x = s.split('');
console.log(x);