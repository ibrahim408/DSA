// The fibonacci sequence is a famous bit of mathematics, and it happens to have a recursive definition. The first two values in the sequence are 0 and 1 (essentially 2 base cases). Each subsequent value is the sum of the previous two values, so the whole sequence is: 0, 1, 1, 2, 3, 5, 8, 13, 21 and so on. Define a recursive fibonacci(n) method that returns the nth fibonacci number, with n=0 representing the start of the sequence.


// fibonacci(0) → 0
// fibonacci(1) → 1
// fibonacci(2) → 1

function fibonacci(num) {
    // if (num === 0) return 0;
    // if (num === 1 || num === 2) return 1;

    if (num < 2) return num;


    return fibonacci(num - 1) + fibonacci(num - 2);
}



const numbers = [0,1,2,3,4,5,6,7,8,9,10];

numbers.forEach(number => {
    const result = fibonacci(number);
    console.log(`fibonacci(${number}) → `, result);
});


// fibonacci(0) →  0
// fibonacci(1) →  1
// fibonacci(2) →  1
// fibonacci(3) →  2
// fibonacci(4) →  3
// fibonacci(5) →  5
// fibonacci(6) →  8
// fibonacci(7) →  13
// fibonacci(8) →  21
// fibonacci(9) →  34
// fibonacci(10) →  55