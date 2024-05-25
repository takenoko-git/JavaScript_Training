const fs = require('fs');

function readFile(fileName) {
    return new Promise(
        (onFulfilled, onRejected) => {
            fs.readFile(fileName, "utf-8", (err, data) => err ? onRejected(err) : onFulfilled(data));
        })
}

function writeFile(fileName, data) {
    return new Promise(
        (onFulfilled, onRejected) => {
            fs.writeFile(fileName, data, err => err ? onRejected(err) : onFulfilled("OK"));
        });
}

/* ジェネレーター*/
// function* fileReadAndWrite() {
//     try {
//         const data = yield Promise.all([readFile('a.txt'), readFile('b.txt'), readFile('c.txt')]);
//         yield writeFile('d.txt', data[0]+data[1]+data[2]);
//     } catch (err) {
//         console.error("エラーが起こりました" + err);
//     }
// }

/* async/awaite */
async function fileReadAndWrite() {
    try {
        const data = await Promise.all([readFile('a.txt'), readFile('b.txt'), readFile('c.txt')]);
        yield writeFile('d.txt', data[0]+data[1]+data[2]);
    } catch (err) {
        console.error("エラーが起こりました" + err);
    }
}

fileReadAndWrite();