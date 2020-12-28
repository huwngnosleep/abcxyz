// Trai deu cac phan tu trong mang
function flattenUnitsOfArray(){
    var numberOfProperties = 0, numberOfUnits = 0, output = [], i1;
    var arrays = [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]
        ];
    function numberOfProp(){
        for(var prop in arrays){
            numberOfProperties += 1;
        };
    };
    function numberOfUnitsInEachArr(){
        numberOfUnits = arrays[i1].length;
    };
    function flattenArray(){
        numberOfProp();
        for (i1 = 0; i1 < numberOfProperties; i1++){
            numberOfUnitsInEachArr();
            for (var i2 = 0; i2 < numberOfUnits; i2++){
                output.push(arrays[i1][i2]);};
    
        };
        console.log(output);
    };
    flattenArray();
    };
    flattenUnitsOfArray();
    
    console.log('=========');
    
    // Xoa phan tu bi lap
    function delDuplicate (arr){
        l = arr.length;
        var newArr = [];
        for (var i = 0; i < l; i++){
            if (newArr.indexOf(arr[i]) == -1){newArr.push(arr[i])};
        };
        newArr.sort(function(a, b){
          return a - b
        });
        console.log(newArr);
    };
    delDuplicate(['a', 'b', 'c', 'b', 'a']);
    // Dem so lan xuat hien cua phan tu trong mang
    function timesOfAppearance(arr){
        var l = arr.length, dem = 0;
        for ( var i = 0; i < l; i++){
            for (var j = 0; j < l; j++){
                if (arr[i] == arr[j]){ dem += 1};
                
            };
            
        };
    };
    timesOfAppearance(['a', 'b', 'c', 'b', 'a']);