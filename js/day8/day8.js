const fs = require('fs');
const { start } = require('repl');
const buffer = fs.readFileSync(__dirname + '/input.txt');
const textInput = buffer.toString();

textArray = textInput.split('\n');

//Get instructions
let instructions = textArray[0]
  .replace(/[^RL]/g, '')
  .replace(/R/g, '1')
  .replace(/L/g, '0')
  .split('');

let startArray = [];
let textObject = {};
startArray.splice(0, 2);
console.log(startArray);
textArray.forEach((element) => {
  textObject['' + element.substring(0, 3)] = [
    element.substring(7, 10),
    element.substring(12, 15),
  ];
  element.substring(2, 3) == 'A'
    ? startArray.push([element.substring(0, 3), element.substring(0, 3)])
    : false;
});
startArray.splice(0, 2);
startArray.splice(0, 2);
startArray.splice(2);
console.log(startArray);

part2();
function part1() {
  first = 'AAA';
  last = 'ZZZ';
  let current = first;
  let instruction = 0;
  let steps = 0;

  while (current !== last) {
    current = textObject['' + current][instructions[instruction]];
    instruction++;
    instruction = instruction == instructions.length ? 0 : instruction;
    steps++;
  }
  console.log(steps);
}

function part2() {
  let instruction = 0;
  let steps = 0;
  let keepLooping = true;
  while (keepLooping) {
    let allAtEnd = true;
    startArray.forEach((element) => {
      element[1] = textObject['' + element[1]][instructions[instruction]];
      if (element[1][2] !== 'Z') {
        allAtEnd = false;
      }
    });
    if (allAtEnd) {
      keepLooping = false;
    }
    instruction++;
    instruction = instruction == instructions.length ? 0 : instruction;
    steps++;
  }
  console.log(steps);
}
