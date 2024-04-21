const bruce = { 名前: "ブルース"};
const madeline = { 名前: "マデライン"};

function update(birthday, occupation) {
    this.生年 = birthday;
    this.職業 = occupation;
}

const updateBruce1949 = update.bind(bruce, 1949);

console.log(bruce);
updateBruce1949("作詞家");
console.log(bruce);
