//Read input and set all arrays
// const fs = require('fs');
// const buffer = fs.readFileSync(__dirname + '/input.txt');
// const inputText = buffer.toString();

//Map structure [destination, source, range]
//Using smaller sampleArray first
inputText = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`;

const inputArray = inputText.split('\n\n');
//Set seedarray
const seedArray = inputArray[0]
  .replace(/\D/g, '-')
  .replace(/\D+/g, ' ')
  .trim()
  .split(' ');

//Set seedToSoilMap

let temp = [];
let tempArray = [];
for (let x = 1; x < inputArray[1].split('\n').length; x++) {
  temp = inputArray[1].split('\n')[x].split(' ');
  tempArray.push(temp);
}
const seedToSoilMap = [...tempArray];

//set soilToFertilizerMap
temp = [];
tempArray = [];
for (let x = 1; x < inputArray[2].split('\n').length; x++) {
  temp = inputArray[2].split('\n')[x].split(' ');
  tempArray.push(temp);
}
const soilToFertilizerMap = [...tempArray];
console.log(soilToFertilizerMap);
