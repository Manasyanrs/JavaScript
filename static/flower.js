"use strict"

// 1․ Ստեղծել Flower(Ծաղիկ) կլասը, և իրանից ժառանգվող մի քանի ծաղկի տեսակներ(Վարդ, մեխակ, կակաչ և այլ)։
// 2․Հավաքել 3 հատ բուկետ տարբեր ծաղիկներից(զանգվածի տեսքով)
// 3․Հասվել ծաղինկերի ընդհանուր թիվը օգտագործելով static փոփոխական

class Flower {
    static countFlowers = 0;

    constructor(name) {
        this.name = name;
        Flower.countFlowers++;
    }
}

class Vard extends Flower { }
class Mexak extends Flower { }
class Kakach extends Flower { }

function buket(f1, f2, f3) {
    let _buket = [];
    for (let index = 0; index < 3; index++) {
        _buket.push(new Vard(f1));
        _buket.push(new Mexak(f2));
        _buket.push(new Kakach(f3));

    }
    return _buket;
}


let bunchOfFlowers = buket("Vard", "Kakach", "Mexak");

console.log(bunchOfFlowers);
console.log("Total created flowers = " + Flower.countFlowers);
