const bruce = { 名前: "ブルース"};
const madeline = { 名前: "マデライン"};

function update(birthday, occupation) {
    this.生年 = birthday;
    this.職業 = occupation;
}

const updateBruce = update.bind(bruce); /* updateBruceを使うとthisはbruceに束縛される */

console.log(bruce);
updateBruce(1904, "俳優");
console.log(bruce);

console.log(madeline);
updateBruce.call(madeline, 1274, "王様"); /* madelineに束縛しようとしても…*/
console.log(madeline); /* madelineは不変 */
console.log(bruce); /* bruceが変わってしまう */
