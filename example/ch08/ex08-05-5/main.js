const words = ["Beachball", "Rodeo", "Angel",
                "Aardvark","Xylophone", "November", "Chocolate",
                "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const longWords = words.reduce((a, w) => w.length>6 ? a+" "+w : a, "").trim();
console.log(longWords);