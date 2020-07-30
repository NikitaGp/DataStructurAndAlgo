// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let chunkArr = [];
//     for (let i =0; i < array.length;) {
//         let subArr = [];
//         for(let s = 0; s < size; s++) {
//             if (typeof array[i] !== "undefined") {
//                 subArr.push(array[i]);
//                i++ ;
//             }
//         }
//         chunkArr.push(subArr)
//     }
//     return chunkArr;
// }
// function chunk(array, size) {
//     var chunkedArr = [];
//     var index  = 0;
//     while(index < array.length) {
//         chunkedArr.push(array.slice(index, index+size));
//         index +=size;
//     }
//     return chunkedArr;
// }
function chunk(array, size) {
    var chunkedArr = [];
    
    for (element of array) {
         const last = chunkedArr[chunkedArr.length -1];
         if (!last || last.length === size) {
            chunkedArr.push([element]);
         } else {
             last.push(element)
         }
    }
    return chunkedArr;
}
module.exports = chunk;
