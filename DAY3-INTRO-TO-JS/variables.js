// Variables
// var variable - global-scoped variable, even though it is in the if block, it still works outside the if block.

if (true) {
    var MyName = "Lynn";
    MyName = "Ms. Lynn";
}
console.log(MyName);

// let variable - block-scoped variable
let age = 18;
console.log(age);

if (true) {
    let animal = "Cat";
    animal = "Elephant";
    console.log(animal);
}

// console.log(animal); - this will not work outside the scope where it was declared

// const variable - fixed or cannot be changed
const birthdate = "**/**/**"
console.log(birthdate);
// birthdate = "00-00-0000";