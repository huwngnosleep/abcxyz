
function wallsAndGates(rooms) {
    // write your code here
    const H = rooms.length
    const W = rooms[0].length

    for(let row = 0; row < H; row++) {
        for(let col = 0; col < W; col++) {
            if(rooms[row][col] === 0) {
                dfs(row, col, 0)
            }
        }
    }

    return rooms

    function dfs(row, col, currentStep) {
        if(row < 0 || col < 0 || row === H || col === W) return

        if(rooms[row][col] > currentStep) {
            rooms[row][col] = currentStep
        }
        if(row - 1 >= 0 && rooms[row - 1][col] > currentStep) {
            dfs(row - 1, col, currentStep + 1)
        }

        if(row + 1 < H && rooms[row + 1][col] > currentStep) {
            dfs(row + 1, col, currentStep + 1)
        }

        if(col + 1 < W && rooms[row][col + 1] > currentStep) {
            dfs(row, col + 1, currentStep + 1)
        }

        if(col - 1 >= 0 && rooms[row][col - 1] > currentStep) {
            dfs(row, col - 1, currentStep + 1)
        }

    }
}