const mergeSort = (array) => {
    if (array.length <= 1) return array;

    const middle = Math.floor(array.length / 2);
    
    const arrayLeft = array.slice(0,middle);
    const rightArray = array.slice(middle);
    
    return merge (mergeSort(arrayLeft), mergeSort(rightArray))
}

const merge = (left,right) => {
    let i = 0;
    let j = 0;
    let array = [];
    while(i < left.length && j < right.length){
        if (left[i] > right[j]){
            array.push(right[j]);
            j++
        } else {
            array.push(left[i]);
            i++
        }
    }
    return array.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([3,4,2,5,3,3,7]));