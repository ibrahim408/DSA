var productExceptSelfDos = function(nums) {
    let result = [];
    let firstPass = [];
    let secondpass = [];
    firstPass[0] = 1;
    secondpass[nums.length-1] = 1;
    
    for (let i = 1; i < nums.length; i++){
        firstPass[i] =  firstPass[i-1] * nums[i-1];
    }
    
    for (let i = nums.length - 2; i >= 0; i--){
        secondpass[i] = secondpass[i+1] * nums[i+1];
    }

    for (let i = 0; i < nums.length; i++){
        result[i] =  firstPass[i] * secondpass[i];
    }
    return result;
};

var productExceptSelf = function(nums) {
    let result = [];
    result[0] = 1;
    let R = 1;

    for (let i = 1; i < nums.length; i++){
        result[i] =  result[i-1] * nums[i-1];
    }
console.log('result',result)
    for (let i = nums.length - 1; i >= 0; i--){
        result[i] = result[i] * R;
        R = R * nums[i]
    }


    return result;
};


console.log(productExceptSelf([1,2,3,4]))




[1,1,2,6]
[24,12,4,1]