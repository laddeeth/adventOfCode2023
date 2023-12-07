const textInput = `2345A 1
Q2KJJ 13
Q2Q2Q 19
T3T3J 17
T3Q33 11
2345J 3
J345A 2
32T3K 5
T55J5 29
KK677 7
KTJJT 34
QQQJA 31
JJJJJ 37
JAAAA 43
AAAAJ 59
AAAAA 61
2AAAA 23
2JJJJ 53
JJJJ2 41`;

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

fiveKind = fiveKind.length > 0 ? sortHands(fiveKind) : [];
// fourKind = fourKind.length > 0 ? sortHands(fourKind) : [];
// fullHouse = fullHouse.length > 0 ? sortHands(fullHouse) : [];
// threeKind = threeKind.length > 0 ? sortHands(threeKind) : [];
// twoPair = twoPair.length > 0 ? sortHands(twoPair) : [];
// pair = pair.length > 0 ? sortHands(pair) : [];
// highCard = highCard.length > 0 ? sortHands(highCard) : [];

let rank =
  fiveKind.length +
  fourKind.length +
  fullHouse.length +
  threeKind.length +
  twoPair.length +
  pair.length +
  highCard.length;
let answer = 0;

// countAnswer(fiveKind);
countAnswer(fourKind);
// countAnswer(fullHouse);
// countAnswer(threeKind);
// countAnswer(twoPair);
// countAnswer(pair);
// countAnswer(highCard);
function countAnswer(arr) {
  if (arr.length > 0) {
    arr.forEach((element) => {
      answer += element[1] * rank;
      rank--;
    });
  }
}

//Categorize Functions
function isFiveKind(cards) {
  tempCards = sortCards(cards);
  return tempCards[0].match(/(.)\1{4}/) ? true : false;
}
37;

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

//Nånting är väldigt fel här!!!
function sortHands(arrayOfHands) {
  console.log(arrayOfHands);
  let convertedArray = [];
  let sortedArray = [];
  //Build converted array [cards in array by value, index number in original array]
  let x = 0; //Track which from arrayOfHands is converted
  arrayOfHands.forEach((element) => {
    convertedArray.push([element[0].split(''), element[1]]);
    x++;
  });
  while (convertedArray.length > 1) {
    let y = 0;
    let highest = 1;
    while (y < convertedArray.length - 1) {
      if (isHighestHand(convertedArray[y][0], convertedArray[y + 1][0])) {
        highest = y;
      }
      y++;
    }
    sortedArray.push(...convertedArray.splice(highest, 1));
  }
  sortedArray.push([...convertedArray[0]]);

  return sortedArray;
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
