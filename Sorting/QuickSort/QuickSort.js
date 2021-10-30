var sortArray = function(nums) {
	let len = nums.length;
	if(len < 2) return nums;

	quickSort(nums, 0, len-1)
	return nums
};

var quickSort = function(nums, start, end){
    // if start greater than or equal to end retuen
	if(start >= end) return
	let left = start, right = end;
    // Find a Pivot Value
	let pivot = nums[Math.floor((start+end) / 2)];
	while(left <= right) {
        // increase left untill not getting left value more than pivot value
		while(left <= right && nums[left] < pivot){
			left++
		}
        // Decrease right untill not getting right value less than pivot value
		while(left <= right && nums[right] > pivot){
			right--
		}
        // if left index is less than or equal to right swap
        // increase left and right
		if(left <= right){
			let temp = nums[left]
			nums[left] = nums[right]
			nums[right] = temp
			left++
			right--
		}
	}
    // right index ko end mai isliye dal rakha hai kyunki hume pta hai right index ke bad ke sare 
    // element bade hai 
	quickSort(nums, start, right);
     // left start isliye dal rakha hai kyunki hume pta hai left index ke phele ke sare 
    // element chhote hai 
	quickSort(nums, left, end)
}


quickSort([0,1,1,2,0,5], 1 , 5);