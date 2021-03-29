// Given a string, compute recursively a new string where all the 'x' chars have been removed.

// noX("xaxb") → "ab"
// noX("abc") → "abc"
// noX("xx") → ""

function noX(str){
    if (str.length === 0) return str;

    if (str[str.length - 1] === 'x'){
        return noX(str.slice(0,-1));
    } else {
        return noX(str.slice(0,-1)) + str[str.length - 1];
    }
};


const words = ["xaxb","abc","xx"];
words.forEach(word => {
    const result = noX(word);
    console.log(`noX("${word}") →`,result);
})