const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'hello.txt'), function(err, data) {
    if(err) return console.log('エラー：ファイルから読み込めません。');
    console.log('詠みこんだファイルの内容：');
    console.log(data);
})