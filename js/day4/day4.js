//Read input and split by row into array
const fs = require('fs');
const buffer = fs.readFileSync('js/day4/input.txt');
const inputText = buffer.toString();
const inputArray = inputText.split('\n');

part1();

//Part 1
function part1() {
  let totalPoints = 0;

  //For each row
  for (let x = 0; x < inputArray.length; x++) {
    let rowArray = inputArray[x].substring(10).split('|');
    winningArray = rowArray[0].split(' ');
    myNumbersArray = rowArray[1].split(' ');

    //Sanitize arrays
    for (let x = 0; x < winningArray.length; x++) {
      if (winningArray[x] == '') {
        winningArray[x] = -1;
      } else {
        winningArray[x] = parseInt(winningArray[x]);
      }
    }

    for (let x = 0; x < myNumbersArray.length; x++) {
      if (myNumbersArray[x] == '') {
        myNumbersArray[x] = -2;
      } else {
        myNumbersArray[x] = parseInt(myNumbersArray[x]);
      }
    }

    //Find matches
    let totalMatches = 0;
    for (let x = 0; x < winningArray.length; x++) {
      for (let y = 0; y < myNumbersArray.length; y++) {
        if (winningArray[x] == myNumbersArray[y]) {
          totalMatches++;
        }
      }
    }

    //Calculate points
    let points = parseInt(2 ** (totalMatches - 1));

    //Add up points
    totalPoints += points;
  }
  console.log(totalPoints);
}

function part2() {}
