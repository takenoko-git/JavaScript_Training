console.log(document instanceof Node);
console.log(document.parentNode);
console.log(document.childNodes);
console.log(document.nodeType);
console.log(document.nodeName);

const children = document.childNodes;
console.log("子どもの数：" + children.length);
console.log(children[0]);
console.log(children[0].nodeType);
console.log(children[1]);
console.log(children[1].nodeType);
console.log(children[2]);

console.log(Node.ELEMENT_NODE);
console.log(children[1].nodeType === Node.ELEMENT_NODE);
console.log(Node.TEXT_NODE);