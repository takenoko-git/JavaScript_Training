let globalFunc;
{
    let blocker = 'a';
    globalFunc = function() {
        console.log(blocker);
    }
}
globalFunc();