// count7(717) → 2
// count7(7) → 1
// count7(123) → 0


function count7(number){
    if (number <= 9 && number === 7) return 1;
    if (number <= 9) return 0;

    return  number % 10 === 7 ? 1 + count7(Math.floor(number/10)) : count7(Math.floor(number/10));
}

const numbers = [717,7,123,789777323];
numbers.forEach(number => {
    const result  = count7(number);
    console.log(`count7(${number}) -> `,result);
})

// count7(717) ->  2
// count7(7) ->  1
// count7(123) ->  0
// count7(789777323) ->  4


// 717 
// 71
// 7