// Given a string, compute recursively a new string where identical chars that are adjacent in
// the original string are separated from each other by a "*".

function pairStar(str){
    if (str.length <= 1) return str;

    if (str[str.length - 2] === str[str.length - 1]){
        return pairStar(str.slice(0,-1)) + "*" + str[str.length - 1];
    } else {
        return pairStar(str.slice(0,-1)) + str[str.length - 1];
    }
}

const words = ["hello","xxyy","aaaa"];
words.forEach(word => {
    const result = pairStar(word);
    console.log(`pairStar("${word}") → `,result )
})


// pairStar("hello") →  hel*lo
// pairStar("xxyy") →  x*xy*y
// pairStar("aaaa") →  a*a*a*a



//hello ==> "hel*lo"

// hello
// hell
// hel
// he
// h return ''
// '' return ''

// he => he
// hel => hel;
// hell => hel + * + l
// hel*l => hello


