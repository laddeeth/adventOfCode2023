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

//Set All Maps
const seedToSoilMap = setMap(1);
const soilToFertilizerMap = setMap(2);
const fertilizerToWaterMap = setMap(3);
const waterToLightMap = setMap(4);
const lightToTemperatureMap = setMap(5);
const temperatureToHumidityMap = setMap(6);
const humidityToLocationMap = setMap(7);
console.log(humidityToLocationMap);

function setMap(index) {
  temp = [];
  tempArray = [];
  for (let x = 1; x < inputArray[index].split('\n').length; x++) {
    temp = inputArray[index].split('\n')[x].split(' ');
    tempArray.push(temp);
  }
  return tempArray;
}
