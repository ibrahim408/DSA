// Given an array of ints, compute recursively if the array contains somewhere a value followed in the array 
// by that value times 10. We'll use the convention of considering only the part of the array that 
// begins at the given index. In this way, a recursive call can pass index+1 to move down the array. 
// The initial call will pass in index as 0.
function array220(nums,index) {
    if (index === nums.length - 1) return false;

    if (nums[index] * 10 === nums[index + 1]) return true;

    return array220(nums,index + 1)
}

const arrays = [[1, 2, 20], [3,30], [3]];
arrays.forEach(arr => {
    const result = array220(arr,0);
    console.log(`array220([${arr}], 0) → `,result);
})

// array220([1,2,20], 0) →  true
// array220([3,30], 0) →  true
// array220([3], 0) →  false


// [1,2,20]
//    ^ ^ // return true;

//     ^ if reach end return false



// [1,2,20]

// 0
// 1
// 2 return 

// [1, 2, 20]
//     ^  ^ 

// SOLUTION ONE
// let result = false;
// function helper(nums,index){
//     if (index == nums.length - 1) return;

//     helper(nums, index + 1);

//     if (index < nums.length){
//         if (nums[index] * 10 === nums[index + 1 ]){
//             result = true;
//         }
//     }
// };

// helper(n,i);
// return result;