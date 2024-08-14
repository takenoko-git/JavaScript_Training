const fs = require('fs');

fs.readdir('data', function(err, files) {
    if(err) {
        console.error("致命的なエラー：dataディレクトリを読み込めません。");
        process.exit(1);
    }
    const txtFiles = files.filter(f => /\.txt$/i.test(f));

    if(txtFiles.length === 0) {
        console.log("処理すべき.txtファイルがありません。");
        process.exit(0);
    }
    console.log(".txtファイルを処理します...");
})