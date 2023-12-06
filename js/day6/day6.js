console.log('Answer Part 1 is:', getAnswer(getInputOne()));

console.log('Answer Part 2 is:', getAnswer(getInputTwo()));

function getAnswer(inputText) {
  inputRows = inputText.split('\n');

  inputRows[0] = inputRows[0].substring(6);
  inputRows[1] = inputRows[1].substring(10);

  let timeArray = inputRows[0].split(' ');
  let distanceArray = inputRows[1].split(' ');

  let x = 0;
  let answer = 1;
  while (x < timeArray.length) {
    let y = 0;
    let max = timeArray[x];
    let totalWays = 0;
    while (y < max) {
      let speed = y + 1;
      let roadLeft = max - speed;

      if (speed * roadLeft > distanceArray[x]) {
        totalWays++;
      }
      y++;
    }
    answer = answer * totalWays;
    x++;
  }
  return answer;
}

function getInputOne() {
  return `Time: 55 99 97 93
Distance: 401 1485 2274 1405`;
}

function getInputTwo() {
  return `Time: 55999793
Distance: 401148522741405`;
}
