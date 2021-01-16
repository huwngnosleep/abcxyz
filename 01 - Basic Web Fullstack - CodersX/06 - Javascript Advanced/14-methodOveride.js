class CoffeeMachine {
    makeCoffee() {
        console.log('making coffee');
    }
}

class SpecialCoffeeMachine extends CoffeeMachine {
    makeCoffee() {
        console.log('make coffee and do something');
    }
}

SpecialCoffeeMachine.makeCoffee()
// nếu một class có 2 method giống nhau thì method kế thừa sẽ không được gọi