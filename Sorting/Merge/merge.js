function MergeSort(nums) {
  if(nums.length < 2) {
    return nums;
  }
  var midPoint = Math.floor(nums.length-1/2);
  var leftArray = nums.slice(0, midPoint);
  var rightArray = nums.slice(midPoint);
  return Merge(MergeSort(leftArray), MergeSort(rightArray));
}

function Merge(leftArray, rightArray) {
   var l = 0; r = 0; lLen = leftArray.length; rLen = rightArray.length
   result = []
   while(l < lLen && r < rLen) {
       if (leftArray[l] < rightArray[r]) {
        
         result.push(leftArray[l]);
            l++
       } else {
           result.push(rightArray[r]);
           r++
       }
   }
   return  result.concat(leftArray.slice(l)).concat(rightArray.slice(r));

}