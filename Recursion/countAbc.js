//Count recursively the total number of "abc" and "aba" substrings that appear in the given string.

function countAbc(word){
    if (word.length < 3) return 0;

    if (word[word.length - 3] === 'a' && word[word.length - 2] === 'b' && word[word.length - 1] === 'c')
        return 1 + countAbc(word.slice(0,-1));
    else if (word[word.length - 3] === 'a' && word[word.length - 2] === 'b' && word[word.length - 1] === 'a')
        return 1 + countAbc(word.slice(0,-1))
    else 
        return countAbc(word.slice(0,-1));
}

const words = ["abc","abcxxabc","abaxxaba","an",""];
words.forEach(word => {
    const result = countAbc(word);
    console.log(`countAbc("${word}") → `,result);
})

// countAbc("abc") →  1
// countAbc("abcxxabc") →  2
// countAbc("abaxxaba") →  2
// countAbc("an") →  0
// countAbc("") →  0


// base case less than 2 chars 
// if case[0] case[1] case[2] === "abc"  || "aba" 
    //return 1 + call



// barabc
// barab
// bara
// bar
// ba  return 0
// bar return 1 : 0 + (0)

    