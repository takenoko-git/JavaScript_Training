function countdown() {
    let i;
    console.log("カウントダウン：");
    for(i=5; i>=0; i--)  {
        setTimeout(() => {
            console.log(i===0 ? "GO!" : i);
        }, (5-i)*1000);
    }
}
countdown();