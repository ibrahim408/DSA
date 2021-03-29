
// Given a non-negative int n, return the sum of its digits recursively (no loops). 
//Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6), 
//while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).


// sumDigits(126) → 9
// sumDigits(49) → 13
// sumDigits(12) → 3


function sumDigits(number){
    if (number < 10) return number;

    return (number % 10) + sumDigits(Math.floor(number / 10))
}

const numbers = [126,49,12];
numbers.forEach(number => {
    const result  = sumDigits(number);
    console.log(`sumDigits(${number}) -> `,result);
})

// sumDigits(126) ->  9
// sumDigits(49) ->  13
// sumDigits(12) ->  3


// 126 % 10 = 6
// 12 % 10 = 6
// 1  = 6