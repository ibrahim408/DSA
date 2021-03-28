
// Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute 
// the result recursively (without loops).

function factorial(num){
    if (num === 1) return num;
    
    return num *  factorial(num-1)
}



let numbers = [1,2,3,4,5];
numbers.forEach(number => {
    const result = factorial(number);
    console.log(`factorial of ${number} is: `,result);
} )

// factorial of 1 is:  1
// factorial of 2 is:  2
// factorial of 3 is:  6
// factorial of 4 is:  24
// factorial of 5 is:  120