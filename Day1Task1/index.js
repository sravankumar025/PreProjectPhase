//element node
const elem = document.getElementsByTagName("b");
console.log(elem);


//text node
const textNode = document.createTextNode("Hello, world!");
console.log(textNode);


//comment node
const comntNode = document.createComment("This is the comment node creation");
console.log(comntNode);

const link = document.querySelector("img").getAttribute("src");
console.log(link);


//Dom tree for this HTML doc
const doc = document.documentElement;

function Domtree(node, depth = 0) {
  console.log(" ".repeat(depth*4) + node.nodeName);

  if (node.childNodes.length > 0) {
    for (let i = 0; i < node.childNodes.length; i++) {
        Domtree(node.childNodes[i], depth + 1);
    }
  }
}

Domtree(doc);