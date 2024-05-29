let d = new Date();
console.log(d);

d = new Date(2017, 0);
console.log(d);

d = new Date(2017, 1);
console.log(d);

d = new Date(2017, 1, 14);
console.log(d);

d = new Date(2017, 1, 14, 13);
console.log(d);

d = new Date(2017, 1, 14, 13, 30);
console.log(d);

d = new Date(2017, 1, 14, 13, 30, 5);
console.log(d);

d = new Date(201, 1, 14, 13, 30, 5, 500);
console.log(d);

// UNIXエボックからのタイムスタンプから経過した日時を生成
d = new Date(0);
console.log(d);

d = new Date(1000);
console.log(d);

d = new Date(1463443200000);
console.log(d);

// UNIXエボック以前の日時を取得するため、負の日時を指定
d = new Date(-365*24*60*60*1000);
console.log(d);

// 日時を表す文字列（英語表現）を指定（現地時間になる）
d = new Date('June 14, 1903');
console.log(d);

d = new Date('June 14, 1903 GMT-0000');
console.log(d);

d = new Date('2020年7月10日');
console.log(d);
