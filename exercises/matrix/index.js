// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]].




















//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    var matrixArr = [];
    for (let row = 0; row < n; row++) {
        matrixArr.push([]);
    }
    count = 1;
    startRow =0;
    startColumn = 0;
    endRow = n-1;
    endColumn = n-1;
    while(startRow <= endRow && startColumn <= endColumn) {
        //top row
        for (var col = startColumn; col <= endColumn; col++) {
            matrixArr[startRow][col] = count;
            count++
        }
        startRow++;
        // right
        for (var row = startRow; row <= endRow; row++) {
            matrixArr[row][endColumn] = count;
            count++;
        }
        endColumn--;
      
        // bottom
        for (var col = endColumn; col >= startColumn; col--) {
            matrixArr[endRow][col] = count;
            count++;
        }
        endRow-- ;

        // left
        for (var row = endRow; row >= startRow; row--) {
            matrixArr[row][startColumn] = count;
            count++;
        }
        startColumn++;
    }
    return matrixArr;
}

module.exports = matrix;
