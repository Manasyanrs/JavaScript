"use strict"

// 1․ Ստեղծել ArramSum կլասը որը ժառանգում է Array կլասից․
// 2․ Ստեղծել sum մեթոդը ArramSum ի մեջ որը կհաշվի զանգվածի մեջ եղած բոլոր տվերի գումաը, 
// եթե կհանդիպի ոչ թվային արժեքի ապա այն չի ներառի գումարի մեջ

class ArraySum extends Array {
    sum() {
        let result = 0;
        for (const iterator of this.values()) {
            if (typeof iterator === "number") {
                result += iterator;
            }
        }
        return result;
    }
}

let arraySum = new ArraySum(1, 2, "x", 3, 4, 5, "10");
console.log(arraySum.sum());
