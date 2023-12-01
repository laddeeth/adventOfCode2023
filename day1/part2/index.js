let readline = require('readline');
let fs = require('fs');

let myInterface = readline.createInterface({
  input: fs.createReadStream('day1/part2/input.txt'),
});

let regX = /(one|two|three|four|five|six|seven|eight|nine|\d)/;
let regRevX = /(eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|\d)/;

let lineno = 0;
let sum = 0;
let thisline;
myInterface.on('line', function (line) {
  lineno++;
  let firstOcc = toNumber(line.match(regX)[0]);
  let secondOcc = toNumber(reverseString(reverseString(line).match(regRevX)[0]));
  thisline = parseInt(firstOcc + "" + secondOcc);
  sum += thisline;
  console.log(sum);


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

function reverseString(str) {

  var splitString = str.toString().split("");

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join("");
  
  return joinArray;
}

