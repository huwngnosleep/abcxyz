var networkDelayTime = function(times, n, k) {
    const minTime = new Array(n).fill(Infinity)
    minTime[k - 1] = 0
    const adjList = []
    for(let i = 0; i < n; i++) {
        adjList.push([])
    }
    const priorityQueue = [k - 1]
    for(let i = 0; i < times.length; i++) {
        const [source, target, weight] = times[i]
        adjList[source - 1].push([target - 1, weight])
    }
    
    while(priorityQueue.length > 0) {
        const current = priorityQueue.pop()
        const adjacents = adjList[current]
        for(let i = 0; i < adjacents.length; i++) {
            const [target, weight] = adjacents[i]
            if(minTime[current] + weight < minTime[target]) {
                minTime[target] = minTime[current] + weight
                priorityQueue.push(target)
                priorityQueue.sort((a, b) => b - a)
            }
        }
    }
    
    const result = Math.max(...minTime)
    
    return result === Infinity ? -1 : result
};