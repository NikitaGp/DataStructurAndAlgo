// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     let stringACharMap = buildCharacterMap(stringA);
//     let stringBCharMap = buildCharacterMap(stringB);
//     if(Object.keys(stringACharMap).length !== Object.keys(stringBCharMap).length) {
//         return false;
//     }
//     for (let cha in stringACharMap) {
//         if(!stringBCharMap.hasOwnProperty(cha)) {
//             return false
//         }
//         if(stringACharMap[cha] !== stringBCharMap[cha]) {
//             return false
//         }
//     }
//     return true;
// }
// function anagrams(stringA, stringB) {
//     let stringACharMap = stringA.replace(/[^\w]/g,'').toLowerCase();
//     let stringBCharMap = stringB.replace(/[^\w]/g,'').toLowerCase();
//     if(stringACharMap.length !== stringBCharMap.length) {
//         return false;
//     }
//     for (let cha of stringACharMap) {
//         let charIndex = stringBCharMap.indexOf(cha);
//         if( charIndex === -1){
//             return false;
//         } else {
//             stringBCharMap[charIndex] = '';  
//         }
//     }
//     return true;
// }
function anagrams(stringA, stringB) {
    return clearString(stringA) === clearString(stringB);
}
function clearString(str) {
    return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
}
function buildCharacterMap(str) {
    var charMap = {};
    
    for (let c of str.replace(/[^\w]/g,'').toLowerCase()) {
        if(charMap[c]) {
            charMap[c] = charMap[c] + 1;
        }
        else {
            charMap[c] = 1;
        }
    }
    return charMap
}

module.exports = anagrams;
