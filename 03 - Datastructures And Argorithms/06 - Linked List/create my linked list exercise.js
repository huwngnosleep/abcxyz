class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head
    this.length = 1
  }

  printList() {
    const array = []
    let currentNode = this.head
    while(currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(array)
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  prepend(value) {
    this.head = {
      value: value,
      next: this.head
    }
    this.length++
  }

  insert(index, value) {
    let newNode = {
      value: value,
      next: null,
    }
    let grabbedNode = this.traverse(index - 1)
    newNode.next = this.traverse(index)
    grabbedNode.next = newNode
    this.length++
  }

  traverse(index) {
    let currentIndex = 0
    let currentNode = this.head
    while(currentIndex !== index) {
      currentNode = currentNode.next
      currentIndex++
    }
    return currentNode
  }

  remove(index) {
    let leader = this.traverse(index - 1)
    let grabbedNode = this.traverse(index + 1)
    leader.next = grabbedNode
    this.length--
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while(second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }

    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const myLinkedList = new LinkedList(1)
myLinkedList.append(2)
myLinkedList.append(3)
myLinkedList.append(4)
myLinkedList.append(5)
myLinkedList.prepend(0)
myLinkedList.reverse()

// myLinkedList.printList()