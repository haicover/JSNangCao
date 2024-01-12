let x;
let d = new Date();

// Date methods

x = d.toString();
console.log("1:", x);
x = d.getTime();
console.log("2:", x);
x = d.valueOf();
console.log("3:", x);
x = d.getFullYear();
console.log("4:", x);
x = d.getMonth();
x = d.getMonth() + 1;
console.log("5:", x);
x = d.getDate();
console.log("6:", x);
x = d.getDay();
console.log("7:", x);
x = d.getHours();
console.log("8:", x);
x = d.getMinutes();
console.log("9:", x);
x = d.getSeconds();
console.log("10:", x);
x = d.getMilliseconds();
console.log("11:", x);
x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
console.log("12:", x);
// Intl.DateTimeFormat API (locale specific)
x = Intl.DateTimeFormat('en-US').format(d);
console.log("13:", x);
x = Intl.DateTimeFormat('en-GB').format(d);
console.log("14:", x);
x = Intl.DateTimeFormat('default').format(d);
console.log("15:", x);
x = Intl.DateTimeFormat('default', { month: 'long' }).format(d);
console.log("16:", x);
x = d.toLocaleString('default', { month: 'short' });
console.log("17:", x);
x = d.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',
});

console.log(x);