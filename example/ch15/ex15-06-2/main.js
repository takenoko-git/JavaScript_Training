const before = { d: new Date().valueOf() };
console.log(before.d);
console.log(typeof before.d);

const json = JSON.stringify(before);
console.log(json);
console.log(typeof json);

const after = JSON.parse(json);
console.log(after);
console.log(typeof after.d);

const d = new Date(after.d);
console.log(d);
