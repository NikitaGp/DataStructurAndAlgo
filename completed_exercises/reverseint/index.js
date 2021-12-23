// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}
// function reverseInt(number) {
//   var revNumber = 0;
//  while (number > 0) {
//    revNumber = (revNumber * 10) + (number % 10);
//    number = Math.floor(number / 10);
//  }
//  return revNumber;
// }
module.exports = reverseInt;
