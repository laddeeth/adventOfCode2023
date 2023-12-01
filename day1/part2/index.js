let readline = require('readline');
let fs = require('fs');

let myInterface = readline.createInterface({
  input: fs.createReadStream("day1\/part2\/input.txt"),
});

let regX = /\d/g;

let lineno = 0;
let sum = 0;
myInterface.on('line', function (line) {
  lineno++;
  let digits = line.match(regX);
  // sum += parseInt(digits[0] + digits.pop());
  // console.log(sum);
  console.log(digits);
});