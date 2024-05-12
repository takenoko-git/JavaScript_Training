function getRainbowIteraotr()  {
    const colors = ['red', 'orange', 'yellow','green','blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return {
        next() {
            if(++colorIndex >=  colors.length) colorIndex = 0;
            console.log("in iteraotr: "+ colors[colorIndex])
            return {value: colors[colorIndex], done: false};
        }
    };
}

const rainbowIterator = getRainbowIteraotr();
setInterval(function() {
    document.querySelector('.rainbow')
        .style['backgroud-color'] = rainbowIterator.next().value;
})