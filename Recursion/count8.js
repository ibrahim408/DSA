// Given a non-negative int n, compute recursively (no loops) the count of the occurrences of 8 as a digit, 
// except that an 8 with another 8 immediately to its left counts double, so 8818 yields 4. 

// count8(8) → 1
// count8(818) → 2
// count8(8818) → 4

function count8(number){
    if (number == 0) return 0;

    if (number % 10 === 8){
        if (Math.floor(number/10) % 10 === 8)
            return 2 + count8(Math.floor(number/10))
        return 1 + count8(Math.floor(number/10))  
    } else {
        return count8(Math.floor(number/10)) 
    }
}

const numbers = [8,818,8818,88888,8818181,88788];
numbers.forEach(number => {
    const result  = count8(number);
    console.log(`count8(${number}) -> `,result);
})

// count8(8) ->  1
// count8(818) ->  2
// count8(8818) ->  4
// count8(88888) ->  9
// count8(8818181) ->  5
// count8(88788) ->  6


// 88 % 10 = 8
// 88 / 10 = 8 % 10 = 8