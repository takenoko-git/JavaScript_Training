function countdown(seconds) {
    return new Promise(
        function(onFulfilled, onRejected) {
            for(let i=seconds; i>=0; i--) {
                setTimeout(function() {
                    if(i>0) console.log(i + '...');
                    else onFulfilled(console.log("GO!"));
                }, (seconds-i)*1000);
            }
        } /*無名関数の終わり*/
    ); /* new Promise の引数の終わり */
}

const p = countdown(5);
p.then(function() {
    console.log("カウントダウン成功");
});
p.catch(function(err) {
    console.log("カウントダウンでエラーが起こった：" + err.message);
});