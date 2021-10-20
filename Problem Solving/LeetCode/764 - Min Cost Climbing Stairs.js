var minCostClimbingStairs = function(cost) {
    let n = cost.length
    const seen = []
    
    return Math.min(minCost(n - 1), minCost(n - 2))
    
    function minCost(n) {
        if(n < 0) {
            return 0 
        }
        if(n === 1 || n === 0) {
            return cost[n]
        }
        if(seen[n]) {
            return seen[n]
        } else {
            seen[n] = cost[n] + Math.min(minCost(n - 1), minCost(n - 2))
            return seen[n]
        }
    }
};