textInput = `32T3K 765
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

//Svar ska bli 6440

arrayInput = textInput.split('\n');

//Put together array of hands with sorted cards
for (let x = 0; x < arrayInput.length; x++) {
  arrayInput[x] = arrayInput[x].split(' ');
  arrayInput[x][1] = parseInt(arrayInput[x][1]);
  arrayInput[x] = sortCards(arrayInput[x]);

  console.log(arrayInput[x]);
}

function isFiveKind(cards) {
  return cards[0].match(/(.)\1{4}/) ? true : false;
}

function isFourKind(cards) {
  return cards[0].match(/(.)\1{3}/) ? true : false;
}

function isFullHouse(cards) {
  return cards[0].match(/(.)\1{4}/) ? true : false;
}

function isThreeKind(cards) {
  return cards[0].match(/(.)\1{4}/) ? true : false;
}

function isTwoPair(cards) {
  return cards[0].match(/(.)\1{4}/) ? true : false;
}

function isPair(cards) {
  return cards[0].match(/(.)\1{4}/) ? true : false;
}

function sortCards(cards) {
  cards[0] = cards[0].split('').sort().join('');
  return cards;
}
