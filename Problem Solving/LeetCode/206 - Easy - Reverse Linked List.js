var reverseList = function(head) {
    let currentNode = head
    let prev = null
    while(currentNode) {
        let next = currentNode.next
        currentNode.next = prev
        prev = currentNode
        currentNode = next
    }
    return prev
};