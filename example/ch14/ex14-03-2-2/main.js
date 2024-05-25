function countdown(seconds) {
    return new Promise(function(onFulfilled, onRejected) {
        const timeoutIds = [];
        for(let i=seconds; i>=0; i--) {
            timeoutIds.push(setTimeout(
                function() {
                    if(i===13) {
                        timeoutIds.forEach(clearTimeout);
                        return onRejected(new Error("この数は不吉です"));
                    }
                    else if(i>0) {
                        console.log(i + '...');
                    }
                    else {
                        console.log("GO!");
                        onFulfilled();
                    }
                }, /*無名関数の終わり*/ 
            (seconds-i)*1000));
        }
    }); /* new Promise の引数の終わり */
}

countdown(15).then(
    function()  {
        console.log("カウントダウン成功");
    },
    function(err) {
        console.log("カウントダウンでエラーが起こった：" + err.message);
    }
);
