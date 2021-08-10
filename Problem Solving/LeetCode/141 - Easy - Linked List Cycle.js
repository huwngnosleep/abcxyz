// Tortois and Hare to detect cycle in linked list
// Use two pointers with 1 speed and 2 speed
// wherever they meet each other, there will be a cycle
// from the meeting point and head node
// use two pointer with the same speed, whenever they meet
// it will be the start of cycle

var hasCycle = function(head) {
    if(!head || !head.next) {
        return false
    }
    let rabbit = head
    let turtle = head
    try {
        while(rabbit || rabbit.next || rabbit.next.next ) {
        turtle = turtle.next
        rabbit = rabbit.next.next
        if(turtle == rabbit) {
            return true
        }
    }
    return false
    } catch(err) {
        return false
    }
};