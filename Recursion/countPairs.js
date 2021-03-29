// We'll say that a "pair" in a string is two instances of a char separated by a char. 
// So "AxA" the A's make a pair. Pair's can overlap, so "AxAxA" contains 3 pairs -- 2 for A and 1 for x. 
// Recursively compute the number of pairs in the given string.
function countPairs(str){
    if (str.length < 3) return 0;

    if (str[str.length - 3] === str[str.length - 1]){
        return 1 + countPairs(str.slice(0,-1));
    } else {
        return countPairs(str.slice(0,-1));

    }
}

const words = ["axa","axax","axbx"];
words.forEach(word => {
    const result = countPairs(word);
    console.log(`countPairs("${word}") → ` ,result);
});


// axbx 
// axb
// ax       return: 0
// axb      return: (0) + ?  1 : 0;
// axbx     return: (0) + ?  1 : 0;
         // 1