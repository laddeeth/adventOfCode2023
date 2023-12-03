const regex = new RegExp(
  '(?=(one|two|three|four|five|six|seven|eight|nine|\\d))',
  'g'
);

const str = `oneight`;
let m;

while ((m = regex.exec(str)) !== null) {
  // This is necessary to avoid infinite loops with zero-width matches
  if (m.index === regex.lastIndex) {
    regex.lastIndex++;
  }

  // The result can be accessed through the `m`-variable.
  m.forEach((match, groupIndex) => {
    console.log(match);
  });
}
