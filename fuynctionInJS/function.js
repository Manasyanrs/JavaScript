function sum(firsDigit, secondDigit) {
    let result = firsDigit + secondDigit;
    return result;
}

function factorial(factorialDigit) {
    let result = 1;
    for (let index = 1; index <= factorialDigit; index++) {
        result *= index;
    }
    console.log(`Factorial of ${factorialDigit} = ${result}`);
    return result;
}

function fibonnaciDigit(digit) {
    let result = 0;
    let fibanacciNumbers = [];
    if (digit > 0) {
        for (let index = 0; index <= digit; index++) {
            fibanacciNumbers[index] = index <= 1 ? index :
                fibanacciNumbers[index - 2] + fibanacciNumbers[index - 1];
        }
        result = fibanacciNumbers[digit-1];
        console.log(`Fibanaccis ${digit}-th digits = ${result}\nFibanacci numbers \n${fibanacciNumbers}`);
        return result;
    } else {
        console.log("Fibonnci number must be a non-negative integer");
        return -1;
    };

}

function sumAllNumbers(number) {
    let result = 0;
    for (let index = 1; index <= number; index++) {
        result += index;

    }
    console.log(`Sum of the 1 to ${number} = ${result}`);
    return result;

}

function countVowelsLetterInText(text) {
    let countVowelsLetters = 0;
    for (let index = 0; index < text.length; index++) {
        if (text[index] === "a" || text[index] === "e" || 
            text[index] === "i" || text[index] === "o" || 
            text[index] === "u" || text[index] === "y"){
                countVowelsLetters += 1;
            }
    }
    return countVowelsLetters;
}

console.log(`Sum of the two digites = ${sum(15, 223)}`);
factorial(5);
factorial(sum(7, 3));
fibonnaciDigit(10);
sumAllNumbers(factorial(4));
let text = "Hello world i am study Java Script, Java and Django.But i know Python";
console.log(`Count vowels letter in text = ${countVowelsLetterInText(text)}`);
