function kangaroo(x1, v1, x2, v2) {
    let n = 0;
    while(n < 100000) {
        let xOfKangaroo1 = x1 + v1 * n;
        let xOfKangaroo2 = x2 + v2 * n;
        if (xOfKangaroo1 === xOfKangaroo2) {
            return 'YES';
        }
        n++;
    }
    return 'NO'    
}