//Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

//You must do it in place.
// Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
// Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var setZeroes = function(matrix) {
    // loop through
    var zeroRow = false;
    var zeroCol = false;
    // check if first row has zero
      for (var c = 0; c < matrix[0].length; c++) {
          if (matrix[0][c] === 0) {
            zeroCol = true;  
          }
       
    }
    // check if first column has Zero
      for (var r = 0; r < matrix.length; r++) {
          if (matrix[r][0] === 0) {
            zeroRow = true;  
          }
       
    }
  // check for other elements for zero, if find a zero then set zero to respectipve first and column index
     for (var r = 1; r < matrix.length; r++) {
        for (var c = 1; c < matrix[0].length; c++) {
             if(matrix[r][c] === 0) {
                 matrix[r][0] = 0;
                 matrix[0][c]=0
                 
             }
            
        }
    }
  // check first column for zero and change then change the correspondance   
    for (var r = 1; r < matrix.length; r++) {
          if (matrix[r][0] === 0) {
              for(var c =1; c<  matrix[0].length ; c++) {
                    matrix[r][c] = 0
              }
          
          }
       
    }
    // check first column for zero and change then change the correspondance   
    for (var c = 1; c < matrix[0].length; c++) {
          if (matrix[0][c] === 0) {
              for(var r =1; r<  matrix.length ; r++) {
                    matrix[r][c] = 0
              }
          
          }
       
    }
      
    if (zeroRow) {
         for (var r = 0; r < matrix.length; r++) {
             matrix[r][0] = 0;
         }
    }
     if (zeroCol) {
         for (var c = 0; c < matrix[0].length; c++) {
             matrix[0][c] = 0;
         }
    }
    return matrix
};

setZeroes([[1,0,3]])
