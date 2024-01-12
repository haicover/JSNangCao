// Challenge 1

const arr = [1, 2, 3, 4, 5];

// arr.reverse();
// arr.push(0);
// arr.unshift(6);

// Same result as above
arr.push(6); //Thêm giá trị vào cuối mảng
console.log(arr);
arr.unshift(0);
console.log(arr); //Thêm giá trị vào đầu mảng
arr.reverse();
console.log(arr); //Đảo ngược 1 mảng

// Challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1
const arr3 = arr1.slice(0, 4).concat(arr2); //arr1.slice(0, 4): cắt 1 phần mảng của arr1    //.concat(arr2):nối mảng đã cắt từ arr1 với mảng arr2
console.log(arr3);
// Solution 2
const arr4 = [...arr1, ...arr2];
console.log(arr4);
arr4.splice(4, 1);
console.log(arr4);