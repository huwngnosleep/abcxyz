// Tim so lon nhat trong array
function max(arr){
    var max = 0, l = arr.length;
    for (var i = 0; i < l; i++){
        if ( arr[i] > max){max = arr[i]};
    };
    console.log(max);
};
max([5, 6, 9]);

// Xep hang diem so
function grade(score) {
    if ( 7 <= score){console.log('A')};
    if ( score < 7){console.log('F')};
};
grade(5);
