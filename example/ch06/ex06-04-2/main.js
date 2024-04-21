const o = {
    name: 'Wallace', // プロパティがプリミティブ
    bark() { return 'Woof!';}, // プロパティが関数。簡略形式
}

const o2 = {
    名前: 'ポチ',
    吠える() { return 'ウーッ、ワン！';},
}
console.log(o);
console.log(o2);
console.log(o.bark());
console.log(o2.吠える());