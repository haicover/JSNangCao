let x;

// Coerced to a string:Buộc vào một chuỗi
x = 5 + '5';
console.log(x);
x = 5 + Number('5');
console.log(x);
// Coerced to a number:Buộc vào một số
x = 5 * '5';
console.log(x);
// null is coerced to 0 as it is a `falsy` value:null bị ép về 0 vì nó là giá trị `falsy`
x = 5 + null;
console.log(x);
x = Number(null);
console.log(x);
x = Number(true);
x = Number(false);

// true is coerced to a 1:true bị ép buộc ở mức 1
x = 5 + true;
console.log(x);
// false is coerced to 0 (falsy):false bị ép về 0 (falsy)
x = 5 + false;
console.log(x);
// Undefined is coerced to 0 (falsy):Không xác định bị ép buộc về 0 (giả)
x = 5 + undefined;
console.log(x);
console.log(x, typeof x);