// let word = 'shilla';
// let reversed = word.split('').reverse().join('');
// console.log(reversed);

let num = 12345;
let reverse = 0;
let re;

while (num !== 0) {
  re = num % 10;
  reverse = reverse * 10 + re;
  num = Math.floor(num / 10);
}
console.log('Reversed number:', reverse);

let num1 = 123;
let num2 = 456;

let rev1 = 0,
  rev2 = 0,
  rem;

while (num1 !== 0) {
  rem = num1 % 10;
  rev1 = rev1 * 10 + rem;
  num1 = Math.floor(num1 / 10);
}
while (num2 !== 0) {
  rem = num2 % 10;
  rev2 = rev2 * 10 + rem;
  num2 = Math.floor(num2 / 10);
}

let sum = rev1 + rev2;

console.log('Reversed 1:', rev1);
console.log('Reversed 2:', rev2);
console.log('Sum:', sum);
