// Chuyen chu cai thanh so
function convertArray(arr){
    var length = arr.length;
    for (var i = 0; i < length; i++){
        switch(arr[i]){
            case 'A':
                arr[i] = 1;
                break;
            case 'a':
                arr[i] = 1;
                break;
            case 'B':
                arr[i] = 2 ;
                break;
            case 'b':
                arr[i] = 2 ;
                break;
            default:
                arr[i] = 0;
                break;
        };
    };
    console.log(arr);
};
convertArray(['A', 'b', 'a', 'B', 'd']);
