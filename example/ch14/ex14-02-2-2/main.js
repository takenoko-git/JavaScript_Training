console.log("setTimeoutの前：" + new Date());
setTimeout(
    () => console.log("アロー関数の中：" + new Date()), 10*1000);
console.log("setTimeoutの後");
console.log("これもsetTimeoutの後");