var items = [5,3,7,6,2,9];

function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], 
        i       = left, 
        j       = right; 
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [items[i],items[j]] = [items[j],items[i]]
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right); 
        if (left < index - 1) { 
            quickSort(items, left, index - 1);
        }
        if (index < right) { 
            quickSort(items, index, right);
        }
    }
    return items;
}


var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]











function quickSort(arr){
    function helper(arr,i,j){
        if (i === j) return arr;

        let pivot = sort(arr,0,0,j);
        let left  = arr.slice(0,pivot);
        let right = arr.slice(pivot + 1);

        helper(left);
        helper(right);
    }
    helper(arr,0,arr.length);
    return arr;
};

function sort(arr,pivot,i,j){
    while (j != i - 1){
        while(arr[i] < arr[pivot]){
            i++;
        };
        while(arr[j] > arr[pivot]){
            j--;
        };
        if (i <= j) {
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
            j--;
        }
    }
    return j;
}

//const array = [10,13,14,6,8,9,13,19];
const array = [];
const result = quickSort(array);
console.log('result: ',result);


