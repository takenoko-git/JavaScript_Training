class FibonacciSequence {
    [Symbol.iterator]() {
        let a = 0, b = 1;
        return {
            next() {
                let rval = { value: b, done: false };
                b += a;
                a = rval.value;
                return rval;
            }
        };
    }
}

const fib = new FibonacciSequence();
let i = 0;
for(let n of fib) {
    console.log(`${i+1}: ${n}`);
    if(++i > 10) break;
}