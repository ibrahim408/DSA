// We have triangle made of blocks. 
//The topmost row has 1 block, the next row down has 2 blocks, 
//the next row has 3 blocks, and so on. 
//Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.


// triangle(0) → 0
// triangle(1) → 1
// triangle(2) → 3



function powerN(base,n){
    if (n === 1) return base;

    return base * powerN(base, n - 1);
}
const numbers = [[3,1],[3,2],[3,3],[3,4],[3,5]];
numbers.forEach(([base,n]) => {
    const result = powerN(base,n);
    console.log(`powerN(${base}, ${n})→ `,result);
})


// powerN(3, 1)→  3
// powerN(3, 2)→  9
// powerN(3, 3)→  27
// powerN(3, 4)→  81
// powerN(3, 5)→  243

