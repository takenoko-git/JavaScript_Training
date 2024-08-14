const fs = require('fs');

fs.readdir(__dirname, function(err, files) {
    if(err) return console.error('ディレクトリの内容を読み込めません。');
    console.log(`${__dirname}のファイルの一覧：`);
    console.log(files);
    console.log(files.map(f => '\t' + f).join('\n'));
})