const text = "Visit oreilly.com today!";
const match = text.match(/[a-z0-9]+(?:\.com|\.org|\.edu)/ig);
console.log(match);

const html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
    '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
    '<link rel="stylesheet" href="//anthing.com/flexible.css">';
const matches = html.match(/(?:https?:)?\/\/[a-z0-9][a-z0-9.-]+[a-z0-9]+/ig);
console.log(matches);