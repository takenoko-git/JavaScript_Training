function countdown(seconds) {
    return new Promise(function(onFulfilled, onRejected) {
        for(let i=seconds; i>=0; i--) {
            setTimeout(function() {
                if(i===13) return onRejected(new Error("この数は不吉です"));
                if(i>0) console.log(i + '...');
                else onFulfilled(console.log("GO!"));
            }, (seconds-i)*1000);
        }
        } /*無名関数の終わり*/
    ); /* new Promise の引数の終わり */
}

countdown(15).then(
    function()  {
        console.log("カウントダウン成功");
    },
    function(err) {
        console.log("カウントダウンでエラーが起こった：" + err.message);
    }
);
