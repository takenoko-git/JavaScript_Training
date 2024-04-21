const g = function f(stop) {
    if(stop) {
        console.log('f停止');
        return;
    } else {
        console.log('fは停止していない');
        f(true);
    }
}; /* ここまで関数の定義 */
g(false); /* 上の関数を呼び出し。関数の引数のstopにfalseが代入される */
console.log("----");
g(true);
