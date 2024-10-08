const sam1 = {
    name : 'Sam',
    age:4,
};
console.log(sam1);

const sam2 = { name: 'Sam', age: 4 }; /* １行で宣言 */
console.log(sam2);

console.log(sam1.name === sam2.name); //true
console.log(sam1.age === sam2.age); //true
console.log(sam1 === sam2); //false

const sam3 = {
    name: 'Sam',
    classification: { /* プロパティの値がオブジェクト*/
        kingdom: 'Animalia',
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'F. catus',
},
};
console.log(sam3);

const タマ = {
    名前: 'タマ',
    分類: { //プロパティの値がオブジェクト
        界: '動物界',
        門: '脊索動物門',
        綱: '哺乳綱',
        目: 'ネコ科',
        亜科: 'ネコ亜科',
        属: 'ネコ属',
        種: 'ネコ',
    },
};
console.log(タマ);
