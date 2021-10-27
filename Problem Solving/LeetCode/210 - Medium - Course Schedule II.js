var findOrder = function(numCourses, prerequisites) {
    const result = []
    
    if(prerequisites.length === 0 && numCourses === 1) return [0]
    
    // init adjList
    const adjList = new Array(numCourses).fill(0).map(() => [])
    
    const topoList = new Array(numCourses).fill(0)
    
    for(let i = 0; i < prerequisites.length; i++) {
        const [pointTo, current] = prerequisites[i]
        adjList[current].push(pointTo)
        topoList[pointTo] += 1
    }
       
    const hasSeen = {}
    
    for(let i = 0; i < numCourses; i++) {
        
        const current = findZeroIndex(topoList)
        if(hasSeen[current]) continue
        if(current === undefined) continue
        
        result.push(current)
        hasSeen[current] = true
        for(const pointTo of adjList[current]) {
            topoList[pointTo] -= 1
        }        
        topoList[current] -= 1
    }
    
    if(result.length === numCourses) {
        return result
    } else {
        return []
    }
    
};

function findZeroIndex(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            return i
        }
    }
}