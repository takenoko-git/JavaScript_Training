function getGreeting() {
    return "Hello world!";
}

const f = getGreeting; // 関数をfに代入
console.log(f()); // Hello world!