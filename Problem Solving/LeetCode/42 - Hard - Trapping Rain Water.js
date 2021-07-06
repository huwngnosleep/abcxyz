var trap = function (height) {
    //     find max 
    var max = 0
    var maxIndex = 0
    var Lmax = 0
    var Rmax = 0
    for (var i = 0; i < height.length; i++) {
        if (height[i] > max) {
            max = height[i]
            maxIndex = i
        }
    }

    //     trappedAmount = min(Lmax, Rmax) - currentHeight
    var amount = 0

    Rmax = max
    for (var i = 0; i < maxIndex; i++) {
        if (height[i] <= Lmax) {
            amount += Math.min(Lmax, Rmax) - height[i]
        } else {
            Lmax = height[i]
        }
    }

    Lmax = max
    Rmax = 0
    for (var i = height.length - 1; i > maxIndex; i--) {
        if (height[i] <= Rmax) {
            amount += Math.min(Lmax, Rmax) - height[i]
        } else {
            Rmax = height[i]
        }
    }
    return amount
};