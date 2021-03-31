// Given a string, return recursively a "cleaned" string where adjacent chars 
// that are the same have been reduced to a single char. So "yyzzza" yields "yza".

function stringClean(str){
    if (str.length <= 1) return str;

    if (str[str.length - 2] !== str[str.length - 1])
        return stringClean(str.slice(0,-1)) + str[str.length - 1];
    else 
        return stringClean(str.slice(0,-1)) 
}

const words = ["yyzzza","abbbcdd","Hello"];
words.forEach(word => {
    const result = stringClean(word);
    console.log(`stringClean("${word}") → `,result);
});

// yyzzza
// yyzzz
// yyzz
// yyz
// yy
// y       return y;
// yy      return (y) + y : '' ;
// yyz     return (y) + z : '';
// yyzz    return (yz) + z : '';
