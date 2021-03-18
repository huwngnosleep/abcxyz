function traverse(node) {
    const tree = { value: node.value }
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
}

class Node {
    constructor(value) {
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        if(this.root === null) {
            this.root = new Node(value)
            return this
        } else {
            let currentNode = this.root
            while(true) {
                if(value === currentNode.value) {
                    return this
                }
                if(value > currentNode.value && currentNode.right !== null) {
                    currentNode = currentNode.right
                }
                if(value > currentNode.value && currentNode.right === null) {
                    currentNode.right = new Node(value)
                    return this
                }
                if(value < currentNode.value && currentNode.left !== null) {
                    currentNode = currentNode.left
                }
                if(value < currentNode.value && currentNode.left === null) {
                    currentNode.left = new Node(value)
                    return this
                }
            }
        }
    }
    lookup(value) {
        if(this.root === null) {
            return false
        }
        let currentNode = this.root
        while(true) {
            if(value === currentNode.value) {
                return true
            }
            if(value > currentNode.value && currentNode.right !== null) {
                currentNode = currentNode.right
            }
            if(value < currentNode.value && currentNode.left !== null) {
                currentNode = currentNode.left
            }
            if(currentNode.right === null && currentNode.left === null) {
                return false
            }
        }
    }

}

const tree = new BinarySearchTree()
tree.insert(3)
console.log(tree)
tree.insert(4)
tree.insert(4)
tree.insert(5)
tree.insert(2)
console.log(tree.lookup(4))