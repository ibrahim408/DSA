// countHi("xxhixx") → 1
// countHi("xhixhix") → 2
// countHi("hi") → 1


function countHi(str){
    if (str.length <= 1) return 0;


    if (str[str.length - 2] === 'h' && str[str.length-1] === 'i'){
        return 1 + countHi(str.slice(0,str.length - 1));
    } else {
        return countHi(str.slice(0,str.length - 1));
    }
}


const words = ['xxhixx','xhixhix','hi'];
words.forEach(word => {
    const result = countHi(word);
    console.log(`countHi("${word}") → `, result);
});



// countHi("xxhixx") →  1
// countHi("xhixhix") →  2
// countHi("hi") →  1





// xxhixx
// xxhix
// xxhi
// xxh
// xx
// x       // base case
// xx      // check last 2
// xxh     // check last 2
// xxhi    // check last 2
// xxhix   // check last 2
// xxhixx  // check last 2



// check last 2 chars 
// base case length  


