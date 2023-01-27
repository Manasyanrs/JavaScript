"use strict"

let figure = "Figure number 1\n";

for (let column = 0; column < 10; column++) {
    for (let row = 0; row < column; row++) {
        figure += "* ";
    }
    figure += "\n";
}
console.log(figure);

figure = "\nFigure number 2 \n\n";

for (let column = 0; column < 10; column++) {
    for (let row = 10; row > column; row--) {
        figure += "  ";
    }
    for(let symbol = 0; symbol <= column; symbol++){
        figure += "* "
    }
    figure += "\n";
}
console.log(figure);

figure = "\nFigure number 3 \n\n";

for (let column = 0; column < 10; column++) {
    for (let row = 0; row < 10 - column; row++) {
        figure += "* ";
    }
    figure += "\n";
}
console.log(figure);

figure = "\nFigure number 4 \n\n";

for (let column = 0; column < 10; column++) {
    for(let probel = 0; probel < column; probel++){
        figure +="  ";
    }
    for (let row = 0; row < 10 - column; row++) {
        figure += "* ";
    }
    figure += "\n";
}
console.log(figure);

figure = "\nFigure number 5 \n\n";

for (let column = 0; column < 10; column++) {
    for (let row = 0; row < 10 - column; row++) {
        figure += " ";
    }
    for(let symbol = 0; symbol <= column; symbol++){
        figure += "* "
    }
    figure += "\n";
}
console.log(figure);

figure = "\nFigure number 6 \n\n";
let probel = 5;
let floor = 0;

for (let column = 0; column < 9; column++) {
    for (let row = 0; row < probel - column; row++) {
        figure += " ";
    }
    for (let symbol = probel; symbol <= probel + column - floor; symbol++) {
        figure += "* ";
    }

    if (column == 2 || column == 5) {
        probel += 2;
        floor += 2;
    }
    figure += "\n";
}
console.log(figure);
