const bruce = { 名前: "ブルース"};
const madeline = { 名前: "マデライン"};

function update(birthday, occupation) {
    this.生年 = birthday;
    this.職業 = occupation;
}

console.log(bruce);
update.apply(bruce,[1955, "俳優"]);
console.log(bruce);

console.log(madeline)
update.apply(madeline,[1918, "ライター"]);
console.log(madeline);