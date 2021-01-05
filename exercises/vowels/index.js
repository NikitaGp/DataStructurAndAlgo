// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    var vowels = ['a','e','i','o','u'];
    count = 0;
    for(let cha of str) {
        if(vowels.indexOf(cha) > -1) {
            count += 1;
        }
    }
    console.log(count);
}

module.exports = vowels;
