// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     return str.split('').reverse().join('');
// }
// function reverse(str) {
//     let reverse = ''
//     for(let character of str) {
//         reverse = character + reverse;
//     }
//     return reverse;
// }
// function reverse(str) {
//     let reverse = ''
//     for(let character of str) {
//         reverse = character + reverse;
//     }
//     return reverse;
// }
// function reverse(str) {
    
//     function reversestrig(str1,reverse1) {
//         if(str1.length == 0) {
//             return reverse1
//         }
        
//       reverse1 = str1.slice(0,1) + reverse1;
//      return  reversestrig(str1.substr(1),reverse1);
//     }
//     return reversestrig(str, '')
//  }
function reverse(str) {
   return str.split('').reduce((reverse, char)=> {
            return char + reverse;
    },'');
 }

module.exports = reverse;
