function migratoryBirds(arr) {
    var  count = {}, mostSeen = 0;
    var birds = arr.sort((a, b) => a - b); 
    birds.forEach(function(i) { count[i] = (count[i]||0) + 1;});
 
    for (const i in count) {
        if (count[i] > mostSeen) {mostSeen = count[i]} 
    }
    for (const i in count) {
        if (count[i] == mostSeen) {return i}
    }
}
