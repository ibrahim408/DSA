function printCombination(arr,  n,  r){ 
    let data = new Array(r);
    combinationUtil(arr, data, 0, n-1, 0, r); 
} 


function combinationUtil(arr,data, start, end, index, r) { 
    if (index == r) { 
        console.log('data',data);
        return
    }

    for (let i = start; i <= end && end - i + 1 >= r - index; i++) { 
        data[index] = arr[i]; 
        combinationUtil(arr, data, i+1, end, index+1, r); 
    } 
} 

function combinationUtilDos(arr,data,start,end,index,r){
    if (index === r) return data;

    for(let i = 0; i < r; i++){
        data.push(arr[i]);
        combinationUtilDos(arr,data,i+1,end,index+1,r);
    }
}

let array = [1, 2, 3,4 ,5]; 
let R = 3; 
let N = array.length
printCombination(array, N, R); 



vo



















