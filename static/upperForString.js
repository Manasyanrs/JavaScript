"use strict"

let t = "hello world";

String.prototype.toUpper = function () {
    let wordList = this.split(" ");
    return wordList.map((word) => word.charAt(0).toUpperCase() + word.substring(1))

}

console.log(t.toUpper());