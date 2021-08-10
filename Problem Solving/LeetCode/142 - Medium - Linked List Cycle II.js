var detectCycle = function(head) {
    let rabbit = head
    let turtle = head
    while(rabbit != null && rabbit.next != null) {
        turtle = turtle.next
        rabbit = rabbit.next.next
        if(turtle == rabbit) {
            while(head != turtle) {
                head = head.next
                turtle = turtle.next
            }
            return turtle
        }
    }
    return null
};