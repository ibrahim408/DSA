// Given an array of ints, compute recursively if the array contains a 6. 
// We'll use the convention of considering only the part of the array that begins at the given index. 
// In this way, a recursive call can pass index+1 to move down the array. The initial call will pass in index as 0.


// array6([1, 6, 4], 0) → true
// array6([1, 4], 0) → false
// array6([6], 0) → true


function array6(nums,index){
    if (index === nums.length) return false;

    if (nums[index] === 6) {
        return true;
    } else {
        return array6(nums, index + 1);
    }
}

const arrays = [[1,6,4],[1,4],[6],[1,2,3,4,5,7,8,9]];
arrays.forEach(arr => {
    const result = array6(arr,0);
    console.log(`array6("${arr}") → `, result);
});


// array6("1,6,4") →  true
// array6("1,4") →  false
// array6("6") →  true
// array6("1,2,3,4,5,7,8,9") →  false


// [1, 6, 4]
//  ^

//  [1, 6, 4]
//      ^ return true

//      //////

// [1, 4]
//  ^

//  [1, 4]
//      ^

// [1, 4]
//          ^ return false;





