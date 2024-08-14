const html = `<img alt='A "simple" exmple.'>` +
        `<img alt="Don't abuse it!">`;
const imageTas = html.match(/<img alt=(['"]).*?\1>/g);
for(let i=0; imageTas && i<imageTas.length; i++) {
    console.log(imageTas[i]);
}