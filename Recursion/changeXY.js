
// Given a string, compute recursively (no loops) a new string where all the lowercase 'x' 
// chars have been changed to 'y' chars.

// changeXY("codex") → "codey"
// changeXY("xxhixx") → "yyhiyy"
// changeXY("xhixhix") → "yhiyhiy"


function changeXY(str){
    if (str.length === 0) return str;

    if (str[str.length - 1] === 'x'){
        return changeXY(str.slice(0,str.length - 1)) + 'y';
    } else {
        return changeXY(str.slice(0,str.length - 1)) + str[str.length - 1];
    }


}

const words = ["codex","xxhixx","xhixhix","xbrxhix"];
words.forEach(word => {
    const result = changeXY(word);
    console.log(`changeXY("${word}") → `, result);
});


// changeXY("codex") →  codey
// changeXY("xxhixx") →  yyhiyy
// changeXY("xhixhix") →  yhiyhiy
// changeXY("xbrxhix") →  ybryhiy







// codex
// code
// cod
// co
// c 
// '' return empty string 
// c
// co
// cod
// code
// codex => change x to y 


// xcat
// xca
// xc
// x
// ''
// y
// yc
// yca
// ycat





