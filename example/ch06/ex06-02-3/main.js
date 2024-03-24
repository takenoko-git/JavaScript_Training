function getGreeting() {
    return "Hello world!";
}

const f = getGreeting; // 関数をfに代入
console.log(f()); // Hello world!

const o = {}; // oという空のオブジェクトの定義
o.f = getGreeting; // オブジェクトoのfというプロパティの値として関数を指定
console.log(o);
console.log(o.f()); // Hello world! (o.fに記憶されている関数を呼び出す)