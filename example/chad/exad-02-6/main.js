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

async function fileReadAndWrite() {
    try {
        let data = await readFile('a.txt');
        data += await readFile('b.txt');
        data += await readFile('c.txt');
        await writeFile('d.txt', data)
    } catch (err) {
        console.error("エラーが起こりました" + err);
    }
}

fileReadAndWrite();