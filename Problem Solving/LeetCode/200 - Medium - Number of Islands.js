// loop through all elements
// if element == 1, then check their top, left, bottom, right element
// if them = 1 then set them = 0
// and again

var numIslands = function(grid) {
    if(grid.length == 0) return 0
    
    const H = grid.length
    const W = grid[0].length
    
    let count = 0
    
    for(let row = 0; row < H; row++) {
        for(let col = 0; col < W; col++) {
            if(grid[row][col] === "0") continue
            
            count++
            dfs(row, col)
        }
    }
    return count
    
    
    function dfs(row, col) {
        if(row < 0 || col < 0 || row === H || col === W) return
        if(grid[row][col] === "0") return
        
        grid[row][col] = "0"
        
        dfs(row - 1, col)
        dfs(row + 1, col)
        dfs(row, col + 1)
        dfs(row, col - 1)
    }
};