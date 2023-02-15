"use strict"

let worlds = ["angel", "legan", "arc", "brag", "dusty", "cat", "cider", "elbow", "inch", "night", "peach", "players",
    "sadder", "save", "state", "taste", "vase", "dreads", "parsley", "cheap", "thing", "chin", "below",
    "cried", "act", "study", "grab", "barg", "garb ", "car", "bored", "robed", "glean"];


let map = new Map();
let startInerations = 1;

for (const word of worlds) {
    if (word.length != 0) {
        let sortWord = word.split("").sort().join("").trim();
        let values = [];

        for (let index = startInerations; index < worlds.length; index++) {
            let sortIterWord = worlds[index].split("").sort().join("").trim();

            if (sortWord.length === sortIterWord.length) {
                if (sortWord.includes(sortIterWord)) {
                    values.push(worlds[index]);
                    worlds[index] = "";
                }
            }
        }
        map.set(word, values);
    }
    startInerations++;
}

console.log(map);
