function f(o) {
    console.log(` fの中(2つの代入の前)：o.messaeg="${o.message}"`);
    o.message = "fで最初にセットされた";
    console.log(` fの中(2つの代入の間)：o.messaeg="${o.message}"`);
    o = {
        message: "新しいオブジェクト!"
    };
    console.log(` fの中(2つの代入の後)：o.message="${o.message}"`);
}

let o = {
    message: "初期値"
};

console.log(`関数fを呼び出す前： o.message="${o.message}"`);
f(o);
console.log(`関数fを呼び出した後: o.message="${o.message}`);