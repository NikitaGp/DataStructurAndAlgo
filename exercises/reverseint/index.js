// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const reverse = require("../reversestring");

function reverseInt(n1) {
   function reverseInt1(n, reverse) {
        if (n < 0) {
            return reverse
        } 
        reverse = reverse *10 + n%10;
        n = n/10
       return reverseInt1(n,reverse)
    }
    
   return reverseInt1(n1, 0);
}

module.exports = reverseInt;
