var threeSum = function(nums) {
    if (nums.length < 3) return [];
    nums.sort((a,b) => a - b);
    const result = [];
    
    for (let index = 0; index < nums.length -2; index++){
        if (nums[index] > 0) return result;
        let left = index + 1;
        let right = nums.length - 1;
        
        if ( index > 0 && nums[index] === nums[index - 1]) continue;
        
        while (left < right){
            let sum = nums[index] + nums[left] + nums[right];
            if (sum < 0){
                left++
            } else if (sum > 0){
                right--;
            } else {
                result.push([nums[index], nums[left], nums[right]])
                while (nums[left] === nums[left + 1]) left ++;
                while (nums[right] == nums[right -1]) right--;
                left++;
                right--;
            }
        }
    }
    return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))