"use strict"
const arr = [1, 3, 5]
const rowIndex = [1, 3, 5, 7, 9, 11];
const collors = [
    "White", "Black", "Orange", "Maroon",
    "Red	Yellow", "Lime", "green", "Salmon",
    "Green", "Sky", "blue", "Crimson",
    "Grey", "Purple", "Mustard", "Peach",
    "Violet", "Magenta", "Coral", "Saffron",
    "Brown", "Pink", "Tan", "Teal",
    "Navy", "Blue", "Turquoise", "Lavender",
    "Lemon", "yellow", "Grape", "vine",
    "Amber", "Sea", "green", "Dark",
    "Charcoal", "Bronze", "Cream", "Mauve",
    "Olive", "Cyan", "Silver", "Rust",
    "Ruby", "Azure", "Mint", "Pearl",
    "Ivory", "Tangerine", "Cherry", "red",
    "Emerald", "Sapphire", "Rosewood", "Lilac",
    "Arctic", "blue", "Pista", "green",
    "Brunette", "Mocha", "Ash", "Jet",]

let col;
for (let i = 0; i < arr.length; i++) {

    for (let index = 0; index < rowIndex.length; index++) {
        setInterval(() => {
            col = Math.floor(Math.random() * collors.length);
        }, 100)

        setInterval(() => {
            document.body.firstElementChild.childNodes[arr[i]].childNodes[rowIndex[index]].
                style.background = collors[col];

        }, 100);

    }

}
