const obj = {};
const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);
console.log(obj);

obj.SIZE = 12; // obj["SIZE"] = 12　と同じ。上のシンボルとは無関係。
console.log(obj.SIZE);
console.log(obj["SIZE"]);
console.log(obj[SIZE]);
console.log(obj);