// We have triangle made of blocks. 
//The topmost row has 1 block, the next row down has 2 blocks, 
//the next row has 3 blocks, and so on. 
//Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.


// triangle(0) → 0
// triangle(1) → 1
// triangle(2) → 3



function triangle(number){
    if (number <= 1) return number;

    return number + triangle(number - 1);
}
const numbers = [0,1,2,3,4,5];
numbers.forEach(number => {
    const result = triangle(number);
    console.log(`triangle(${number}) → `,result);
})


// triangle(0) →  0
// triangle(1) →  1
// triangle(2) →  3
// triangle(3) →  6
// triangle(4) →  10
// triangle(5) →  15

