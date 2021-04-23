function utopianTree(n) {
    let treeHeight = 1;
    let doubleInSpring = () => treeHeight *= 2;
    let addOneInSummer = () => treeHeight += 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 1) {doubleInSpring()}
        else {addOneInSummer()}
    }
    return treeHeight;
}