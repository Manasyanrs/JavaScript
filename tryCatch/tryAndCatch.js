"use strict"

class Vehicle {
    model;
    type;
    countOfWheels;

    set checkCountOfWheels(arg) {
        if (typeof arg != "number") {
            throw "Еhe count of wheels must be a number."
        }
    }

    set speed(arg) {
        if (typeof arg != "number") {
            throw "Speed type must be a number"
        }
    }
}

class Cicle extends Vehicle {
    color;

    set checkColor(arg) {

        if (typeof arg != "string") {
            throw "Color type must be a string"
        }
    }
}
let cecle = new Cicle("BMW", "Motorbike", "two", 102512);
try {
    cecle.speed = "harur";
    cecle.checkColor = 115;

} catch (error) {
    console.log(error);
}

try {
    console.log(cecle);

} catch (error) {
    console.log("Variable not found");
}
