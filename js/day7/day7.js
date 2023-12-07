const textInput = `32T3K 765
T55J5 684
KK677 28
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
  cards[0] = cards[0].split('').sort().join('');
  return cards;
}

function sortHands(arrayOfHands) {
  convertedArray = [];

  let x = 0;
  //Build converted array [cards in array by value, index number in original array]
  arrayOfHands.forEach((element) => {
    convertedArray.push([element[0].split(''), x]);
    x++;
  });
  console.log(convertedArray);
}
