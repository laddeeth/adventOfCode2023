//----------------More modern way to compare arrays
//const arr1 = [1, 2, 3, 4, 5];
//const arr2 = [3, 4, 5, 6, 7];
//const commonElements = arr1.filter(element => arr2.includes(element));
//console.log(commonElements); // Output: [3, 4, 5]

//Read input and split by row into array
const fs = require('fs');
const buffer = fs.readFileSync('js/day4/input.txt');
const inputText = buffer.toString();
const inputArray = inputText.split('\n');

console.log('Day 4 - Part 1:', part1(), 'Part 2:', part2());

//-------------------------------------------------------------PART 1
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
  return totalPoints;
}

//-------------------------------------------------------------PART 2
function part2() {
  let allMatches = 0;
  let matchArray = [];
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
    matchArray.push([x, totalMatches]);
  }
  //Calculate total copies
  let x = 0;
  while (x < matchArray.length) {
    allMatches += matchArray[x][1];

    let start = matchArray[x][0] + 1;
    let end = matchArray[x][0] + matchArray[x][1];
    for (start; start <= end; start++) {
      matchArray.push(matchArray[start]);
    }
    x++;
  }
  return matchArray.length;
}
