var maxSubArray = function(nums){
    let res = 0
    let curSum = 0;
    nums.forEach(num => {
        curSum = Math.max(curSum + num, num);
        res = Math.max(res, curSum);
    })

    return res;
}
console.log(maxSubArray([-5,-4,-2]));

// 1) first && last element will not be negative number 
// 2) no subarray should be negative 
// these two rules negate your total


// 3) if sum is negative reset running sum


// [3,3,-9,-20,-20] ===> [6]
// [-3,3,-9,20,-20] ===> [20]
// [11,11,-9,20,-20] ===> [31]



// -2 