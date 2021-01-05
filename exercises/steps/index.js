// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '# '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     let result = ''
//     for(let i =0; i < n;i++) {
//         let spaceResult = ''
//         result += '#'
//        for (var space = n -1-i; space > 0; space--) {
//         spaceResult += ' '
//        }
//        console.log (result + spaceResult);
//     }
// }
function steps(n) {
   
    for(var row =0; row < n; row++) {
        var step = '';
       for (var column = 0 ; column < n; column++) {
         if (row <= column) {
            step += '#';
         } else {
             step += ' ';
         }
       }
       console.log (step);
    }
}

module.exports = steps;
