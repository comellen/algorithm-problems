class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    static search(findVal) {
        let currentNode = this.root;
        while (currentNode !== null) {
            if (currentNode.value === findVal) {
                return true;
            } else if (currentNode.value > findVal) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    static printTree() {

        return '';
    }

    static preorderSearch(start, findVal) {

        return '';
    }

    static preorderPrint(start, traversal) {

        return traversal;
    }

}

let tree = new BinaryTree;
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);

console.log(tree.search(3));