const SYM = Symbol();
const o = { a: 1, b: 2, c: 3, [SYM]: 4};
console.log(o);
for(let prop in o){
    if(!o.hasOwnProperty(prop)) continue;
    console.log(`${prop}: ${o[prop]}`);
}

const o2 = { a: 1, b: 2, c: 3, SYM: 4};
console.log(o2);
console.log(o2.SYM);
console.log(o2["SYM"]);
console.log(o2[SYM]);

const o3 = { a: 1, b: 2, c: 3};
o3[SYM] = 4;
console.log(o3);
console.log(o3.SYM);
console.log(o3["SYM"]);
console.log(o3[SYM]);