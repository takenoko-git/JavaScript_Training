const beer99 = "99 bottles of beer on the wall" +
    "take 1 down and pass it around" +
    "998 bottles of beer on the wall.";
const matches = beer99.match(/[0-9]+/g);
console.log(matches);