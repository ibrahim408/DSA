
//Given a string, compute recursively (no loops) the number of "11" 
//substrings in the string. The "11" substrings should not overlap.

function count11(str){
    if (str.length < 2) return 0;
    if (str.length === 2 && str[str.length - 2] === '1' && str[str.length - 1] === '1') return 1;



    if (str[str.length - 2] === '1' && str[str.length - 1] === '1')
        return 1 + count11(str.slice(0,str.length - 2));
    else 
        return count11(str.slice(0,str.length - 1));
}

const words = ["11abc11","abc11x11x11","111","1111"];
words.forEach(word => {
    const result = count11(word);
    console.log(`count11("${word}") → `,result)
})

// count11("11abc11") →  2
// count11("abc11x11x11") →  3
// count11("111") →  1
// count11("1111") →  2

// 1111    => 111
// 11    => 1
// ''      

// 1111
     
