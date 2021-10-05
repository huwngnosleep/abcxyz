// key: use a queue to handle multi start point

var orangesRotting = function(grid) {
    const H = grid.length
    const W = grid[0].length
    let minutes = 0
    let fresh = 0
    const queue = []
    
    for(let row = 0; row < H; row++) {
        for(let col = 0; col < W; col++) {
            if(grid[row][col] === 2) {
                queue.push([row, col])
            }
            
            if(grid[row][col] === 1) {
                fresh++
            }
                        
        }
    }

    while(queue.length > 0) {
        const length = queue.length
        for(let i = 0; i < length; i++) {
            const [row, col] = queue.shift()
            rotten(row, col)
        }
        if(queue.length > 0) minutes++
    }
    
    return fresh === 0 ? minutes : -1
    
    
    function rotten(x, y) {
        if (x - 1 >= 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            fresh--;
            queue.push([x - 1, y]);
          }
          if (x + 1 < H && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            fresh--;
            queue.push([x + 1, y]);
          }
          if (y - 1 >= 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            fresh--;
            queue.push([x, y - 1]);
          }
          if (y + 1 < W && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            fresh--;
            queue.push([x, y + 1]);
          }
    }
};