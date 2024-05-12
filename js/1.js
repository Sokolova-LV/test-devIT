function nodeChildCount(node, deep = Infinity) {
    let count = 0;

    function countChildren(node, level) {
        if (level <= deep) {
            count += node.childNodes.length;
            node.childNodes.forEach(child => countChildren(child, level + 1));
        }
    };

    countChildren(node, 0);
    return count;
};

// Пример:

const div = document.createElement('div');
const p = document.createElement('p');
const span = document.createElement('span');
p.appendChild(span);
div.appendChild(p);

console.log(nodeChildCount(div)); // 2
console.log(nodeChildCount(div, 1)); // 1
console.log(nodeChildCount(div, 2)); // 2