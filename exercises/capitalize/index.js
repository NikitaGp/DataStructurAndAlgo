// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// function capitalize(str) {
//     arr = str.split(' ');
//     for(var i =0; i < arr.length ; i++) {
//         arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substr(1, arr[i].length);
//     }
//     return  arr.join(' ');
// }

// with out string helper function
function capitalize(str) {
    result = str[0].toUpperCase();
    for(var i =1; i < str.length ; i++) {
        if (str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i]
        }
    }
    return  result;
}


module.exports = capitalize;
