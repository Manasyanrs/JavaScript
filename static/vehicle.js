"use strict"

// 1․ Ստեղծել Vehicle (Փոխադրամիջոց) կլասը, և իրանից ժառանգվող մի քանի փոխադրամիջոցի տեսակներ (Սայլ, Ավտոմեքենա, Բեռնատար և այլն)
// 2․ Ստեղծել public տեսակի 3 հատ փոփոխական Vehicle  կլասի մեջ 2-ական ժամագների համար
// 3․ Ստեղծել protected տեսակի 2 հատ փոփոխական Vehicle  կլասի մեջ 1-ական ժամագների համար
// 4․ Ստեղծել private տեսակի 3 հատ փոփոխական Vehicle  կլասի մեջ 2-ական ժամագների համար

class Vehicle{
    name;
    model;
    typeOfVehicle;
    _weight = 0;
    _color = "white";
    #countCreatedVehicle = 0;
    #VIN = "*************";
    #key = "*************";

    constructor (name, model, typeOfVehicle){
        this.name = name;
        this.model = model;
        this.typeOfVehicle = typeOfVehicle;
        this.#countCreatedVehicle ++;
    }

    toString(){
        return `\nName: ${this.name}\nModel: ${this.model}\ntypeOfVehicle: ${this.typeOfVehicle} 
        \ncountCreatedVehicle: ${this.#countCreatedVehicle} \nVIN: ${this.#VIN} \nKey: ${this.#key} \n`
    }
}

class Car extends Vehicle{};
class Truck extends Vehicle{};

let car = new Car("BMW", "Sedan", "Sport");
let truck = new Car("Volvo", "Truck", "maxWeight");


console.log(car.model, car.name, car.typeOfVehicle);
console.log(truck.model, truck.name, truck.typeOfVehicle);

console.log(truck.toString(), car.toString());
