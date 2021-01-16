// Filter Cac San Pham
var categories = [
    { id: 1, name: 'Đồ điện tử'},
    { id: 2, name: 'Đồ gia dụng'},
    { id: 3, name: 'Nội thất'}
    ];
    
    var listProducts = [
        {id: 1, categoryId: 1, name: 'Tivi'},
        {id: 2, categoryId: 1, name: 'Tủ lạnh'},
        {id: 3, categoryId: 3, name: 'Ghế sofa'},
        {id: 4, categoryId: 1, name: 'Máy giặt'},
        {id: 5, categoryId: 2, name: 'Chén bát'},
        {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
        {id: 7, categoryId: 3, name: 'Cửa kính'},
        {id: 8, categoryId: 1, name: 'Điều hoà'},
        {id: 9, categoryId: 3, name: 'Bàn tròn'},
        {id: 10, categoryId: 2, name: 'Lò vi sóng'},
        ];
    
    function filterCategories(){
        var arr1 = listProducts.filter(function(x){
            return x.categoryId == 1;
        });
        var arr2 = listProducts.filter(function(x){
            return x.categoryId == 2;
        });
        var arr3 = listProducts.filter(function(x){
            return x.categoryId == 3;
        });
        var arr1 = arr1.map(function(x){
            return x.name
        });
        var arr2 = arr2.map(function(x){
            return x.name
        });
        var arr3 = arr3.map(function(x){
            return x.name
        });
        console.log('id: 1', arr1);
        console.log('id: 2', arr2);
        console.log('id: 3', arr3);
    };
    filterCategories();
    
    console.log('==============');
    
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
    delDuplicate([1, 1, 2, 2, 3, 3, 4]);