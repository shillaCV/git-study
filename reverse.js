// let word = 'shilla';
// let reversed = word.split('').reverse().join('');
// console.log(reversed);

let num = 12345;
let reverse = 0;
let rem;

while (num !== 0) {
  rem = num % 10;
  reverse = reverse * 10 + rem;
  num = Math.floor(num / 10);
}
console.log('Reversed number:', reverse);
