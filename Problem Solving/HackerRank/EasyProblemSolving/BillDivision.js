function bonAppetit(bill, k, b) {
    var total = 0;
    for (const charge of bill) {
        total += charge;
    }
    total -= bill[k];
    var splitedMoney = total / 2;
    if (b - splitedMoney === 0) {
        console.log( 'Bon Appetit')
    } else {console.log ( b - splitedMoney)}

}
bonAppetit([3, 10, 2, 9], 1,5)