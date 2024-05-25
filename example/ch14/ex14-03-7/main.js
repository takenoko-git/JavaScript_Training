function countdown(seconds) {
    return new Promise(function(onFulfilled, onRejected) {
        const timeoutIds = [];
        for(let i=seconds; i>=0; i--) {
            timeoutIds.push(setTimeout(
                function() {
                    if(i===13) {
                        timeoutIds.forEach(clearTimeout);
                        return onRejected(new Error(`${i}という数は不吉です`));
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

function launch()  {
    return new Promise(function(onFulfilled, onRejected) {
        if(Math.random() < 0.5) return; /* 打ち上げ失敗 */
        console.log("発射!");
        setTimeout(() => {
            onFulfilled("周回軌道に乗った！");
        }, 2*1000);
    });
}


countdown(3)
    .then(launch)
    .then(function(msg) {
        console.log(msg);
    })
    .catch(function(err) {
        console.error("管制塔、管制塔。トラブル発生..." + err);
    })