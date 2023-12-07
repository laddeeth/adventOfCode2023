const textInput = `32T3K 765
T55J5 684
KK677 28
KK688 23
KTJJT 220
QQQJA 483`;

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
  arrayInput[x] = arrayInput[x];

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
sortHands(twoPair);

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
  convertedArray = [];
  //Build converted array [cards in array by value, index number in original array]
  let x = 0; //Track which from arrayOfHands is converted
  arrayOfHands.forEach((element) => {
    convertedArray.push([element[0].split(''), element[1]]);
    x++;
  });
  let sortedArray = [];
  let y = 0;
  while (y < convertedArray.length) {
    let highest = convertedArray[y];
    for (let z = y; z < convertedArray.length; z++) {
      console.log(convertedArray[z], z);
      if (z + 1 < convertedArray.length) {
        if (isHighestHand(convertedArray[z][0], convertedArray[z + 1][0])) {
          console.log('true');
          highest = [...convertedArray[z]];
        }
      }
    }
    sortedArray.push(...highest);
    console.log(sortedArray);
    y++;
  }
}

function isHighestHand(a, b) {
  let x = 0;
  while (x < 5) {
    if (isHigherThan(a[x], b[x])) {
      return true;
    } else if (isLowerThan(a[x], b[x])) {
      return false;
    }
    x++;
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
      case 'T':
        return 10;
    }
  }
}
