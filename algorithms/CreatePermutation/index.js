function swapCharacters(str,i,j){
    let strArray = Array.from(str);
    [strArray[i],strArray[j]] = [strArray[j],strArray[i]];
    return strArray.join('');
}

function getPermutation(str,index,right,data){
    if(index === right){
     data.push(str);
    } else {
        for(let i = index; i <= right; i++){
            str = swapCharacters(str,index,i);
            getPermutation(str,index + 1,right,data);
                            str = swapCharacters(str,i,index);
        }    
    }
    return data;
}
let permutations = [];
const S = 'abcd';
getPermutation(S,0,S.length-1,permutations);

console.log('answer:',permutations)

