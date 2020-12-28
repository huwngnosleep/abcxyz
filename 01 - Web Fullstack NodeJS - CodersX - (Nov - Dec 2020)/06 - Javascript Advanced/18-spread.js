// ...spread trải giá trị của array ra
const a = [1, 2, 3];
function sum(...number) {
    console.log(...number);
}
sum(...a) // sum(1, 2, 3)