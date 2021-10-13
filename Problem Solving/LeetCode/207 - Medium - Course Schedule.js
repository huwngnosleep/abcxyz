var canFinish = function(numCourses, prerequisites) {
//     init inDegree and adjList
    const inDegree = new Array(numCourses).fill(0)
    const adjList = new Array(numCourses).fill(0).map(() => [])
    for(let i = 0; i < prerequisites.length; i++) {
        const currentPair = prerequisites[i]
        inDegree[currentPair[0]]++
        adjList[currentPair[1]].push(currentPair[0])
    }
    
//     use topological sort 
//     init stack 
    const stack = []
    for(let i = 0; i < inDegree.length; i++) {
        if(inDegree[i] === 0) {
            stack.push(i)
        }
    }
//     start topological sort, count when an item is removed
    let count = 0
    while(stack.length > 0) {
        const current = stack.pop()
        count++
        
        const pointTo = adjList[current]
        for(let i = 0; i < pointTo.length; i++) {
            const next = pointTo[i]
            inDegree[next]--
            if(inDegree[next] === 0) {
                stack.push(next)
            }
        }
    }
    
    
    return count === numCourses
};
