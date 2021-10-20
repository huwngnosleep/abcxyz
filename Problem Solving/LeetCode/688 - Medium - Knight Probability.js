const DIRECTIONS = [[-2, -1], [-2, 1], [-1, 2], [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2]]

var knightProbability = function(n, k, row, column) {
    const dp = new Array(k + 1).fill(0).map(() => 
                                           new Array(n).fill(0).map(() => new Array(n).fill(undefined)))
    
    return recursive(n, k, row, column, dp)
    
    function recursive(n, k, row, column, dp) {
        if(row >= n || column >= n || row < 0 || column < 0) return 0
    
        if(k === 0) {
            return 1
        }
        
        if(dp[k][row][column] !== undefined) return dp[k][row][column]

        let result = 0
        for(let i = 0; i < DIRECTIONS.length; i++) {
            const direction = DIRECTIONS[i]

            result += recursive(n, k - 1, row + direction[0], column + direction[1], dp) / 8
        }
        dp[k][row][column] = result

        return dp[k][row][column]
    }
};