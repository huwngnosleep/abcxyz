class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.length = 0
    }
    peek() {
        return this.first
    }
    enqueue(value) {
        const newNode = {
            value: value,
            next: null,
        }
        if(this.length === 0) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        this.length++
        return this
    }
    dequeue() {
        this.first = this.first.next
        this.length--
        return this
    }
}

const myQueue = new Queue()
myQueue.enqueue(3)
myQueue.enqueue(3)
console.log(myQueue)
myQueue.enqueue(4)
myQueue.enqueue(5)
myQueue.dequeue()
console.log(myQueue)