/**
 * @param {number[][]} graph
 * @return {number}
 */

 // the algorithm is that we generate all possibility when some one take a turn
 // and make prediction from that
var catMouseGame = function(graph) {
    return dp(1, 2, 0)
    
    function dp(mouse, cat, moveCount) {
        if(moveCount > graph.length * 2) return 0
        
        if(mouse == cat) return 2
        
        if(mouse == 0) return 1
        // mouse turn
        if(moveCount % 2 == 0) {
            let canDraw = false
            const neighbor = graph[mouse]
            for(const neig of neighbor) {
                
                const result = dp(neig, cat, moveCount + 1)
                if(result == 1) return 1
                if(result == 0) {
                    canDraw = true
                }
            }
            
            if(canDraw == true) {
                return 0
            } else {
                return 2
            }
        } else {
            let canDraw = false
            const neighbor = graph[cat]
            for(const neig of neighbor) {
                if(neig == 0) continue
                
                const result = dp(mouse, neig, moveCount + 1)
                if(result == 2) return 2
                if(result == 0) {
                    canDraw = true
                }
            }
            
            if(canDraw == true) {
                return 0
            } else {
                return 1
            }
        }
    }
};