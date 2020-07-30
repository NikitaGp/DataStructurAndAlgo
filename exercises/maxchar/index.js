// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     var arr = [];
//     function onlyUnique(value, index, self) { 
//         return self.indexOf(value) === index;
//     }
//     var unique = str.split('').filter( onlyUnique );
//     var maxChar = unique[0];
//     var maxCount = 0;
//     for (let cha of unique) {
        
//         var count = 0;
        
//         for (let cha1 of str) {
//            if (cha1 === cha) {
//                count = count + 1
//            }
//         }
//         if (count > maxCount) {
//             maxCount = count;
//             maxChar = cha;
//         } 
//         count = 0;
//     }
//     return maxChar
// }

function maxChar(str) {
    var charCount = {};
    for (let cha of str) {
        if (charCount[cha]) {
            charCount[cha] = charCount[cha]++;
        } else {
            charCount[cha] = 1;
        }
    }
    var maxCount = 0;
    var character = ''
    for (let cha in charCount ) {
        if (charCount[cha] > maxCount) {
            maxCount = charCount[cha];
            character = cha;
        }
    }
    return character;
}

module.exports = maxChar;
