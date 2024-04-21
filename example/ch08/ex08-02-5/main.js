let arr = [11, 12, 13, 14];
let arr2 = arr.copyWithin(1, 2);
console.log(arr); // [11, 13, 14, 14]
console.log(arr2); // [11, 13, 14, 14]

console.log(arr.copyWithin(2, 0, 2)); // [11, 13, 11, 13]
console.log(arr.copyWithin(0, -3, -1)); // [13, 11, 11, 13]

console.log(arr2);