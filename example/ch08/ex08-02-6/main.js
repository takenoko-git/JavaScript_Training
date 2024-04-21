let arr = new Array(5).fill(1);
console.log(arr);
let arr2 = arr.fill("a");
console.log(arr); // ['a', 'a', 'a', 'a', 'a']
console.log(arr2); 

console.log(arr.fill("b", 1)); // ['a', 'b', 'b', 'b', 'b']

console.log(arr.fill("c", 2, 4)); // ['a', 'b', 'c', 'c', 'b']

console.log(arr.fill(5.5, -4)); // ['a', 5.5, 5.5, 5.5, 5.5]

console.log(arr.fill(0, -3, -1)); // ['a', 5.5, 0, 0, 5,5]