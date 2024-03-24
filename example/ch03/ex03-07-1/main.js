const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';
console.log(dialog1); // He looked up and said "don't do that!" to Max.
console.log(dialog1 == dialog2); // true

const dialog3 = `He looked up and said "don't do that!" to Max.`;
console.log(dialog3);
console.log(dialog2 == dialog3);

const s = "In JavaScript, use \\ as an escape character in strings.";
const s2 = "JavaScriptの文字列では、\\はエスケープ文字として使われる。";

console.log(s);
console.log(s2);

const s3 = "Line1\nLine2";
const s4 = "Windows line 1\r\nWindows line 2";
const s5 = "Speed:\t60kph";
const s6 = "Don\'t";
const s7 = "Sam said \"hello\".";
const s8 = `New in ES2015: \` strings.`;
const s9 = `New in ES2015: \${interpolation}`;
const s10 = "「\\\\」で「\\」を表す!";
const s11 = "De Morgan's law: \u2310(P \u22c0 Q) \u21D4 (\u2310P) \u22c1 (\u2310Q)";
const s12 = "\xc9p\xe9e is fun, but foil is more fun.";

console.log(s3);
console.log(s4);
console.log(s5);
console.log(s6);
console.log(s7);
console.log(s8);
console.log(s9);
console.log(s10);
console.log(s11);
console.log(s12);