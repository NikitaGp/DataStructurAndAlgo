// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let column = n*2-1;
    var midpoint = Math.floor(column/2)
    for(let row = 0; row < n; row++) {
       let starCount = '';
        for (let col = 0 ; col < column; col++) {
          if(midpoint - row <= col && midpoint + row >= col ) {
            starCount += '#';
          } else {
            starCount += ' ';
          }
        }
        console.log(starCount);
    }
}

module.exports = pyramid;
