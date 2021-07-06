// Kĩ thuật Two Shifting Pointer
// Đặt 2 pointer vào đầu và cuối mảng, so sánh rồi chạy dần tới khi 2 đầu gặp nhau
var maxArea = function(height) {
    var a = 0
    var b = height.length - 1
    var area = 0
    while(a !== b) {
        var tempHeight
        if(height[a] >= height[b]) {
            tempHeight = height[b]
        } else {
            tempHeight = height[a]
        }
        const tempSum = tempHeight * (b - a)
        if(tempSum > area) {
            area = tempSum
        }
        
        if(height[a] >= height[b]) {
            b--
        } else {
            a++
        }
        
        if(a == b) {
            return area
        }
    }
};