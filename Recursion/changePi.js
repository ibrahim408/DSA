// Given a string, compute recursively (no loops) a new string where all appearances of "pi" 
// have been replaced by "3.14".

// changePi("xpix") → "x3.14x"
// changePi("pipi") → "3.143.14"
// changePi("pip") → "3.14p"

function changePi(str){
    if (str.length < 2) return '';

    if (str[str.length - 2] === 'p' && str[str.length - 1] === 'i'){
        return changePi(str.slice(0,-1)) + '3.14';
    } else {
        return changePi(str.slice(0,-1))  + str[str.length - 1];
    }
}

const words = ["xpix","pipi","pip","pibrpiahpimpi"];
words.forEach(word => {
    const result = changePi(word);
    console.log(`changePi("${word}"") → `, result);
})


// changePi("xpix"") →  p3.14x
// changePi("pipi"") →  3.14p3.14
// changePi("pip"") →  3.14p
// changePi("pibrpiahpimpi"") →  3.14brp3.14ahp3.14mp3.14








// * base case less than 1 return '';
// * check nth - 2 && nth - 1 values   

// xpix
// xpi
// xp
// x


//pip

// pip
// pi
// p return ''
//   ''
//   pi ==> '3.14'
