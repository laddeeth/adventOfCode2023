let readline = require('readline');
let fs = require('fs');

let myInterface = readline.createInterface({
  input: fs.createReadStream('day1/part2/input.txt'),
});

let regX = /(one|two|three|four|five|six|seven|eight|nine|\d)/g;

let lineno = 0;
let sum = 0;
let thisline;
myInterface.on('line', function (line) {
  lineno++;
  let digits = line.match(regX);
  //thisline = parseInt(toNumber(digits[0]) + "" + toNumber(digits.pop()));
 // sum += thisline;
  if(lineno == 924) console.log(lineno + ": " + digits);

});

function toNumber(a) {
  switch (a) {
    case 'one':
      return 1;
      break;
    case 'two':
      return 2;
      break;
    case 'three':
      return 3;
      break;
    case 'four':
      return 4;
      break;
    case 'five':
      return 5;
      break;
    case 'six':
      return 6;
      break;
    case 'seven':
      return 7;
      break;
    case 'eight':
      return 8;
      break;
    case 'nine':
      return 9;
      break;
    default:
      return a;
  }
}
