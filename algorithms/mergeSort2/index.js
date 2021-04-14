function mergeSort(arr){
    if (arr.length <= 1) return arr;

    let middle = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0,middle));
    let right = mergeSort(arr.slice(middle));

    return combine(left,right);

}
function combine(left = [],right = []){
    let result = [];
    // console.log('left ',left);
    // console.log('right ',right);
    // console.log(' ');
    let i = 0;
    let j = 0;

    while(i < left.length || j < right.length){
        if (i === left.length){
            result = result.concat(right.slice(j));
            j = right.length;
        }else if (j === right.length){
            result = result.concat(left.slice(i));
            i = left.length;
        }else {
            if (left[i] <= right[j]){
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
    }

    // console.log('result: ', result);
    // console.log(' ');
    // console.log(' ');
    return result;
}

//const array = [13,54,34,65,34,24,1,3,4,345];
const array = [3,4,2,5,3,3,7];
console.log('array: ',array);
const result = mergeSort(array);
console.log('result: ',result);



// [13,54,34,65,34,24,1,3,4,345]

// [13,54,34,65,34] [24,1,3,4,345]

// [13,54,] [34,65,34]
// [13][54]  
// [13,54]
// [13,54] [34,34,65]
// [13,34,34,54,65]
                 
