// Inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }
}

// Child class Dog
class Dog extends Animal {
    bark() {
        console.log("Woof woof!");
    }
}

// Child class Cat
class Cat extends Animal {
    meow() {
        console.log("Meow meow!");
    }
}

const myDog = new Dog("Bingo");
myDog.bark();
myDog.eat();

const myCat = new Cat("Pelusa");
myCat.meow();
myCat.eat();