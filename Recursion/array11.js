function array11(nums,index) {
    if (index === nums.length) return 0;

    if (nums[index] === 11){
        return 1 + array11(nums,index + 1);
    } else {
        return array11(nums,index + 1);
    }
}

const arrays = [[1,2,11],[11, 11],[1,2,3,4]];
arrays.forEach(arr => {
    const result = array11(arr,0);
    console.log(`array11([1, 2, 11], 0) → `,result);
})

// array11([1, 2, 11], 0) →  1
// array11([1, 2, 11], 0) →  2
// array11([1, 2, 11], 0) →  0

// 0
// 1
// 2
// 3 return 0

// [1,2,11]
//       ^  // add 1 to returned value from recursion stack
//    ^    // return value from recursion stack