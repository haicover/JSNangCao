let x;

const fruits = ['apple', 'pear', 'orange'];
console.log(fruits);
const berries = ['strawberry', 'blueberry', 'rasberry'];
console.log(berries);
// Nesting arrays:Mảng lồng nhau

// Nesting berries inside of fruits:Làm tổ quả bên trong quả
fruits.push(berries);
console.log(fruits);
// Now we can access 'blueberry' with the following:Bây giờ chúng ta có thể truy cập 'blueberry' bằng cách sau
x = fruits[3][1];
console.log(x);
// Create a new variable and nest both arrays:Tạo một biến mới và lồng cả hai mảng
const allFruits = [fruits, berries];
console.log(allFruits);
x = allFruits[1][2];
console.log(x);
// concat() - Concatenate arrays:Nối mảng
x = fruits.concat(berries);
console.log(x);
// spread operator (...) - Concatenate with:Nối với
x = [...fruits, ...berries];
console.log(x);
// flat() - Flatten an array:Làm phẳng 1 mảng
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();
console.log(x);
// Static methods of Array object:Các phương thức tĩnh của đối tượng Array

// isArray() - Check is is an array:Kiểm tra xem đây có phải là một mảng không
x = Array.isArray(fruits);
console.log(x);
// from() - Create an array from an array like value:Tạo một mảng từ một mảng như giá trị
x = Array.from('12345');
console.log(x);
// of() - Create an array from a set of values:Tạo một mảng từ một tập hợp các giá trị
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);