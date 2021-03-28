// We have a number of bunnies and each bunny has two big floppy ears. We want to compute the total number of ears across all the bunnies recursively (without loops or multiplication).


// bunnyEars(0) → 0
// bunnyEars(1) → 2
// bunnyEars(2) → 4

function bunnyEars(number){
    if (number === 0) return 0;
    
    return 2 + bunnyEars(number - 1);
}

const numbers = [0,1,2,3,4];
numbers.forEach(number => {
    const result = bunnyEars(number);
    console.log(`bunnyEars (${number}) => `,result);
});

// bunnyEars (1) =>  2
// bunnyEars (2) =>  4
// bunnyEars (3) =>  6
// bunnyEars (4) =>  8