// We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).


// bunnyEars2(0) → 0
// bunnyEars2(1) → 2
// bunnyEars2(2) → 5

function bunnyEars2(number){
    if (number === 0) return 0;
    
    return number % 2 == 0 ? 3 + bunnyEars2(number - 1) : 2 + bunnyEars2(number - 1);
}

const numbers = [0,1,2,3,4,5];
numbers.forEach(number => {
    const result = bunnyEars2(number);
    console.log(`bunnyEars2 (${number}) => `,result);
});

// bunnyEars2 (0) =>  0
// bunnyEars2 (1) =>  2
// bunnyEars2 (2) =>  5
// bunnyEars2 (3) =>  7
// bunnyEars2 (4) =>  10
// bunnyEars2 (5) =>  12