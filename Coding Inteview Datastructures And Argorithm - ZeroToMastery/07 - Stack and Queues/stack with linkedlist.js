class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.bottom = null
        this.length = 0
    }
    peak() {
        return this.top
    }

    push(value) {
        const newNode = new Node(value)
        const pointerHolder = this.top
        this.top = newNode
        this.top.next = pointerHolder
        this.length++
        return this
    }

    pop() {
        if(this.length === 0) {
            return
        }
        this.top = this.top.next
        this.length--
        return this
    }
}

const myStack = new Stack()
myStack.push(3)
myStack.push(4)
console.log(myStack)
myStack.push(5)
myStack.pop()
myStack.push(6)

console.log(myStack)