let name = "桃太郎"; /* グローバル変数 */
let age = 26; /* グローバル変数 */

function greet() {
    console.log(`こんにちは、{name}さん！`);
}
function getBirthYear() {
    return new Date().getFullYear() - age;
}

greet();
console.log(getBirthYear());