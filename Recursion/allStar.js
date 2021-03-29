//Given a string, compute recursively a new string where all the adjacent chars 
//are now separated by a "*".

function allStar(str){
    if (str.length <= 1) return str;


    return allStar(str.slice(0,-1)) + '*' + str[str.length - 1];
}

const words = ["hello","abc", "ab",""];
words.forEach(word => {
    const result = allStar(word);
    console.log(`allStar("${word}") → `,result )
})


// allStar("hello") →  h*e*l*l*o
// allStar("abc") →  a*b*c
// allStar("ab") →  a*b
// allStar("") →  




//"hello" =>  "h*e*l*l*o"

// hello
// hell
// hel
// he
// h == return h;
// he == return (h) + * + word[last]
// hel == return (h*e) + * + word[last]
