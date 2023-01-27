"use strict"

const symbols = ["+", "-", "*", "/", "^", "%"];
let firsDigit;
let description;
let secondDigit;
let flag = true;
let reapitQuestion;


while(flag){
    do {
        firsDigit = +prompt("Enter first digit: ");
        if (!firsDigit) {
            confirm(`Is not true!\nNoN is not digit.`);
        }
    } while (!firsDigit);
    
    do {
        description = prompt("Enter description symbol: ");
        for (let index = 0; index < symbols.length; index++) {
            if (description == symbols[index]) {
                description = symbols[index];
                flag = false;
            }
        }
        if (flag) {
            confirm(`Is not true!\nEnter the Math symbols (+, -, /, *, ^, %)`);
        }
    
    } while (flag);
    
    do {
        secondDigit = +prompt("Enter second digit: ");
        if (!secondDigit) {
            confirm(`Is not true!\nNoN is not digit.`);
        }
    
    } while (!secondDigit);
    
    switch (description) {
        case "+": {
            console.log(`${firsDigit} ${description} ${secondDigit} = ${firsDigit + secondDigit}`);
            break;
        }
    
        case "-": {
            console.log(`${firsDigit} ${description} ${secondDigit} = ${firsDigit - secondDigit}`);
            break;
        }
    
        case "/": {
            console.log(`${firsDigit} ${description} ${secondDigit} = ${firsDigit / secondDigit}`);
            break;
        }
    
        case "*": {
            console.log(`${firsDigit} ${description} ${secondDigit} = ${firsDigit * secondDigit}`);
            break;
        }
    
        case "^": {
            console.log(`${firsDigit} ${description} ${secondDigit} = ${firsDigit ** secondDigit}`);
            break;
        }
    
        case "%": {
            console.log(`${firsDigit} ${description} ${secondDigit} = ${firsDigit % secondDigit}`);
            break;
        }
    }
    continueCalculate = prompt("Continue to calculate? (Y/N) ")
    if (continueCalculate === "y" || continueCalculate === "Y"){
        flag = true;
    }
}