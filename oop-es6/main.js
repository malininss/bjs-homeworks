'use strict'


// //--------------Задание 1

// class Weapon {
//     constructor (attribute) {
//         this.name = attribute.name;
//         this.attack = attribute.attack;
//         this.durability = attribute.durability;
//         this.startDurability = this.durability;
//         this.range = attribute.range;
//     }

//     takeDamage(damage) {
//         this.durability -= damage;
//         if (this.durability < 0) {
//             this.durability = 0;
//         }
//     }

//     getDamage() {
//         if ((this.durability / this.startDurability) <= 0.3) {
//             return  this.attack / 2;
//         } else if (!this.durability) {
//             return 0;
//         } 
//         return this.attack;
//     }

//     isBroken() {
//         return Boolean(!this.durability);
//     }
// }

// //Создаём оружие

// const arm = new Weapon({
//     name: 'Рука',
//     attack: 1,
//     durability: Infinity,
//     range: 1
//   });

// const bow = new Weapon({
//     name: 'Лук',
//     attack: 10,
//     durability: 200,
//     range: 3
// });
  
// const sword = new Weapon({
//     name: 'Меч',
//     attack: 25,
//     durability: 500,
//     range: 1
// });

// const knife = new Weapon({
//     name: 'Нож',
//     attack: 5,
//     durability: 300,
//     range: 1
// });

// const staff = new Weapon({
//     name: 'Посох',
//     attack: 8,
//     durability: 300,
//     range: 2
// });

// const improvedBow = new Weapon( {
//     ...bow,
//     name: 'Длинный лук',
//     attack: 15,
//     range: 5    
// })


// const hatchet = new Weapon({
//     ...sword,
//     name: 'Секира',
//     attack: 27,
//     durability: 800,
// })

// const staffOfStorm = new Weapon({
//     ...staff,
//     name: 'Посох бури',
//     attack: 10,
//     range: 3
// });



//------------------------Задание 2 


class Weapon {
    takeDamage(damage) {
        this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }

    getDamage() {
        if ((this.durability / this.startDurability) <= 0.3) {
            return  this.attack / 2;
        } else if (!this.durability) {
            return 0;
        } 
        return this.attack;
    }

    isBroken() {
        return Boolean(!this.durability);
    }
}

class Arm extends Weapon {
    constructor() {
        super(); //// Методом тыка дошел, что сюда нужно добавить super. почему??
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.startDurability = this.durability;
        this.range = 1;
    }
}

class Bow extends Weapon {
    constructor() {
        super();
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.startDurability = this.durability;
        this.range = 3;
    }
}

class Sword extends Weapon {
    constructor() {
        super();
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.startDurability = this.durability;
        this.range = 1;
    }
}

class Knife extends Weapon {
    constructor() {
        super();
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 300;
        this.startDurability = this.durability;
        this.range = 1;
    }
}

class Staff extends Weapon {
    constructor() {
        super();
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.startDurability = this.durability;
        this.range = 3;
    }
}

class ImprovedBow extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 5;
    }
}

class Hatchet extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

class StaffOfStorm extends Staff {
    constructor() {
        super();
        this.name = 'Посох бури';
        this.attack = 10;
        this.range = 3;
    }
}

const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const knife = new Knife();
const staff = new Staff();
const improvedBow = new ImprovedBow();
const hatchet = new Hatchet();
const staffOfStorm = new StaffOfStorm();

console.log(arm, bow, sword, knife, staff, improvedBow, hatchet, staffOfStorm);