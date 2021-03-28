let verticalMap = new Map();
verticalMap.set(1,new Map());
verticalMap.set(2,new Map());

let columnOne = verticalMap.get(1);
let columnTwo = verticalMap.get(2);

columnOne.set(4,[5,4,2]);
columnOne.set(5,[7,7,7]);


columnTwo.set(8,[9,3,6]);
columnTwo.set(9,[1,1,1]);

console.log('+++++++++++++++++++++++++++++++++++++')
let result = [];
verticalMap.forEach((map,key) => {
    result = result.concat([...map.values()])
    // console.log('key: ' ,key);
    // console.log('map: ' ,map);
    // console.log('map: ' ,[...map.values()]);
    // console.log('==========');
})

console.log('result: ',result);


// let maps = [...map.values()];
// let result = [...maps.values()];
// console.log("result: ",[...result.values()]);