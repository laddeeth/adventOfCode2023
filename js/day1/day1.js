part2();

function part1() {
  let myInterface = getInput();
  let regX = new RegExp(/\d/, 'g');

  let sum = 0;
  myInterface.on('line', function (line) {
    let digits = line.match(regX);
    sum += parseInt(digits.at(0) + digits.at(-1));
    console.log(sum);
  });
}

function part2() {
  let myInterface = getInput();

  let regX = /(one|two|three|four|five|six|seven|eight|nine|\d)/;
  let regRevX = /(eno|owt|eerht|ruof|evif|xis|neves|thgie|enin|\d)/;

  let lineno = 0;
  let sum = 0;
  let thisline;
  myInterface.on('line', function (line) {
    lineno++;
    let firstOccurance = toNumber(line.match(regX)[0]);
    let lastOccurance = toNumber(
      reverseString(reverseString(line).match(regRevX)[0])
    );
    thisline = parseInt(firstOccurance + '' + lastOccurance);
    sum += thisline;
    console.log(sum);
  });
}

function getInput() {
  let readline = require('readline');
  let fs = require('fs');

  let myInterface = readline.createInterface({
    input: fs.createReadStream('js/day1/input.txt'),
  });
  return myInterface;
}

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
  var splitString = str.toString().split('');

  var reverseArray = splitString.reverse();

  var joinArray = reverseArray.join('');

  return joinArray;
}
