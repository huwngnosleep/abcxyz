class Hero {
    constructor(name, hp) {
        this.name = name;
        this.hp = hp;
    }

    attack(enemy) {
        console.log('Atacking', enemy.name);
    }
}

// super dùng để viết constructor ngắn gọn hơn và thêm các thuộc tính khác

class SuperHero extends Hero {
    constructor(name, hp, superMode) {
        super(name, hp);
        this.superMode = superMode;
    }
    attack(enemy) {
        super.attack(enemy);
        if(this.superMode == true) {console.log(enemy.name,'is killed!')}
    }
}

let heroA = new Hero('A', 1);
let heroB = new SuperHero('B', 1, true);

heroB.attack(heroA);