//Given a string, compute recursively a new string where all the lowercase 'x' chars 
//have been moved to the end of the string.

function endX(str){
    if (str.length <= 1) return str;

    if (str[0] === 'x'){
        return endX(str.slice(1)) + 'x';
    } else {
        return str[0] + endX(str.slice(1));
    }

}

const words = ["xxre","xxhixx","xhixhix"];
words.forEach(word => {
    const result = endX(word);
    console.log(`endX("${word}") → `,result )
})


// endX("xxre") →  rexx
// endX("xxhixx") →  hixxxx
// endX("xhixhix") →  hihixxx





//CORRECT
//=============================
// bbxxre
// bxxre
// xxre
// xre
// re
// e       return e
// re      return r + (e)
// xre     return (re) + x

//=============================
//if (x) // shift and pop x
// xxreb  =>    xrebx        
// xreb   =>    rebx 
// reb    =>   
// re 
// r    return r    
// re   return re
// reb  return reb
// reb  return rebx
// 


// xxre ==> rexx;


// xxre
// xxr
// xx
// x        // return 
// xx:      return (x) + x
// xxr:     return r + (xx)
// xxre:    return e + (rxx)
            // erxx

//=============================

// xxreb
// xxr
// xx
// x         return: x
// xx:       return: (x) + x
// xxr:      return: (xx)   + r at index before x
// xxre:     return: (rxx)  + e at index before x
// xxreb:    return: (rexx) + b at index before x
//=============================
// xxreb
// xxre
// xxr
// xx
// x
// ''  return 
// x:  return '' + 



// recursion start vs end
// //END
// BOOK
// BOO
// BO
// B           return B
// BOO         return BO  + str[end]
// BOOK        return BOO + str[end]
//             // BOOK

// //START
// BOOK
// OOK
// OK
// K           return K
// OK          return str[end] + K
// OOK         return str[end] + OK
// BOOK        return srt[end] + OOK