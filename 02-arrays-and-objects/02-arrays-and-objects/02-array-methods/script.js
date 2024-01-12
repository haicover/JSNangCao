let x;

const arr = [28, 38, 44, 29, 109];
console.log(arr);
// push() - Push a value on to the end of the array:Đẩy một giá trị vào cuối mảng
arr.push(100);
console.log(arr);
// pop() - Take the last value off:Loại bỏ giá trị cuối cùng
arr.pop();
console.log(arr);
// unshift() - Add a value to the beginning of the array:Thêm giá trị vào đầu mảng
arr.unshift(99);
console.log(arr);
// shift() - Remove first value:Xóa giá trị đầu tiên
arr.shift();
console.log(arr);
// reverse() - Reverse an array:Đảo ngược 1 mảng
arr.reverse();
console.log(arr);
// includes() - Check to see if something is in the array:Kiểm tra có gì trong mảng không
x = arr.includes(445);
console.log(x);
// indexOf() - Return the index of the first match:Trả về chỉ mục của kết quả khớp đầu tiên
x = arr.indexOf(28);
console.log(x);
// Return array as a string:Trả về dưới dạng chuỗi
x = arr.toString();
x = arr.join();
console.log(x);
// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
//trả về các phần tử đã chọn trong một mảng, dưới dạng một mảng mới.Slice lấy chỉ mục của phần tử đầu tiên và chỉ mục của phần tử cuối cùng được đưa vào mảng mới.
x = arr.slice(1, 4);
console.log(x);
// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
// splice() hoạt động giống như slice() ngoại trừ việc nó lấy chỉ mục của phần tử đầu tiên và số phần tử sau đó làm đối số thứ hai.nó cũng làm thay đổi mảng ban đầu trong đó slice() không
x = arr.splice(1, 4);
console.log(x);
// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
// Xóa một phần tử/giá trị - Phần sau đây sẽ thay đổi mảng ban đầu bằng cách loại bỏ phần tử có chỉ số là 4. x sẽ bằng một mảng mới có giá trị được lấy ra đó.
x = arr.splice(4, 1);
console.log(x);
// Chaining methods - Some methods can be chained depending on the return value.
// Phương thức xâu chuỗi - Một số phương thức có thể được xâu chuỗi tùy thuộc vào giá trị trả về.
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);