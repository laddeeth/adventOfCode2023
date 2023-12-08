const fs = require('fs');
const buffer = fs.readFileSync(__dirname + '/input.txt');
const textInput = buffer.toString();

textArray = textInput.split('\n');

//Get instructions
let instructions = textArray[0]
  .replace(/[^RL]/g, '')
  .replace(/R/g, '1')
  .replace(/L/g, '0')
  .split('');

let firstBool = true;
let first = '';
let textObject = {};
let last = '';
textArray.splice(0, 2);
textArray.forEach((element) => {
  textObject['' + element.substring(0, 3)] = [
    element.substring(7, 10),
    element.substring(12, 15),
  ];
});

part1();
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
