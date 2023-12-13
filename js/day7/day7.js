const fs = require('fs');
const buffer = fs.readFileSync(__dirname + '/input.txt');
const textInput = buffer.toString();

//Kind of arrays
let fiveKind = [];
let fourKind = [];
let fullHouse = [];
let threeKind = [];
let twoPair = [];
let pair = [];
let highCard = [];

//Answer shoud be 6440

const arrayInput = textInput.split('\n');

//Put together array of hands with sorted cards
for (let x = 0; x < arrayInput.length; x++) {
  arrayInput[x] = arrayInput[x].split(' ');
  arrayInput[x][1] = parseInt(arrayInput[x][1]);

  //Categorize hands
  if (isFiveKind(arrayInput[x])) {
    fiveKind.push(arrayInput[x]);
  } else if (isFourKind(arrayInput[x])) {
    fourKind.push(arrayInput[x]);
  } else if (isFullHouse(arrayInput[x])) {
    fullHouse.push(arrayInput[x]);
  } else if (isThreeKind(arrayInput[x])) {
    threeKind.push(arrayInput[x]);
  } else if (isTwoPair(arrayInput[x])) {
    twoPair.push(arrayInput[x]);
  } else if (isPair(arrayInput[x])) {
    pair.push(arrayInput[x]);
  } else {
    highCard.push(arrayInput[x]);
  }
}

part2();
function part1() {
  sortHands(fiveKind);

  sortHands(fourKind);
  sortHands(fullHouse);
  sortHands(threeKind);
  sortHands(twoPair);
  sortHands(pair);
  sortHands(highCard);

  let rank =
    fiveKind.length +
    fourKind.length +
    fullHouse.length +
    threeKind.length +
    twoPair.length +
    pair.length +
    highCard.length;
  let answer = 0;

  countAnswer(fiveKind);
  countAnswer(fourKind);
  countAnswer(fullHouse);
  countAnswer(threeKind);
  countAnswer(twoPair);
  countAnswer(pair);
  countAnswer(highCard);
  function countAnswer(arr) {
    if (arr.length > 0) {
      arr.forEach((element) => {
        answer += element[1] * rank;
        rank--;
      });
    }
  }
  console.log(answer);
}

function part2() {
  fiveKind.forEach((element) => {
    element[0] = element[0].replace('JJJJJ', 'AAAAA');
  });
  fourKind.forEach((element) => {
    element[0] = element[0].replace('JJJJ', 'AAAA');
    let fourOf = element[0].match(/[^J]/);
    element[0] = element[0].replace('J', fourOf[0]);
  });
  //fullhouse, replace all J to the other sign
  fullHouse.forEach((element) => {});
  threeKind.forEach((element) => {});
  //Two Pair, replace all J to the highest pair
  //Onepair, replace j to the pair or if is the pair to the highest other card
  //Highest Hand, replace J with the highest other card.
}

//Categorize Functions
function isFiveKind(cards) {
  tempCards = sortCards(cards);
  return tempCards[0].match(/(.)\1{4}/) ? true : false;
}

function isFourKind(cards) {
  tempCards = sortCards(cards);
  return tempCards[0].match(/(.)\1{3}/) ? true : false;
}

function isFullHouse(cards) {
  tempCards = sortCards(cards);
  return tempCards[0].match(/(.)\1{2}(.)\2{1}|(.)\3{1}(.)\4{2}/) ? true : false;
}

function isThreeKind(cards) {
  tempCards = sortCards(cards);
  return tempCards[0].match(/(.)\1{2}/) ? true : false;
}

function isTwoPair(cards) {
  tempCards = sortCards(cards);
  return tempCards[0].match(/(.)\1{1}.?(.)\2{1}/) ? true : false;
}

function isPair(cards) {
  tempCards = sortCards(cards);
  return tempCards[0].match(/(.)\1{1}/) ? true : false;
}

//Sorting Functions
function sortCards(cards) {
  let temp = [...cards];
  temp[0] = temp[0].split('').sort().join('');
  return temp;
}

function sortHands(arrayOfHands) {
  return arrayOfHands.sort((a, b) => {
    end = false;
    let x = 0;
    while (!end) {
      if (isHighestHand(a[0][x], b[0][x])) {
        return -1;
      } else if (isHighestHand(b[0][x], a[0][x])) {
        return 1;
      } else {
        x += x < a[0].length ? 1 : 0;
        if (x == a[0].length) {
          return 1;
        }
      }
    }
  });
}
function isHighestHand(a, b) {
  let x = 0;
  while (x < 5) {
    if (isHigherThan(a[x], b[x])) {
      return true;
    } else if (isLowerThan(a[x], b[x])) {
      return false;
    } else if (isEqual(a[x], b[x])) {
      x++;
    }
  }
  return false;
}

function isLowerThan(a, b) {
  if (convertLetterToValueIfNeeded(a) < convertLetterToValueIfNeeded(b)) {
    return true;
  } else {
    return false;
  }
}

function isEqual(a, b) {
  if (convertLetterToValueIfNeeded(a) == convertLetterToValueIfNeeded(b)) {
    return true;
  } else {
    return false;
  }
}

function isHigherThan(a, b) {
  if (convertLetterToValueIfNeeded(a) > convertLetterToValueIfNeeded(b)) {
    return true;
  } else {
    return false;
  }
}

function convertLetterToValueIfNeeded(a) {
  if (!isNaN(parseInt(a))) {
    return parseInt(a);
  } else {
    switch (a) {
      case 'A':
        return 14;
        break;
      case 'K':
        return 13;
        break;
      case 'Q':
        return 12;
        break;
      case 'J':
        return 11;
        break;
      case 'T':
        return 10;
        break;
    }
  }
}
