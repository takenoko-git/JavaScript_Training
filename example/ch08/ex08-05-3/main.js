const words = ["Beachball", "Rodeo", "Angel",
                "Aardvark","Xylophone", "November", "Chocolate",
                "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const alphabetical = words.reduce((a, x) => {
    if(!a[x[0]])
    a[x[0]] = [];
    a[x[0]].push(x);
    console.log(a[x[0]]);
    return a; }, {});
console.log(alphabetical);