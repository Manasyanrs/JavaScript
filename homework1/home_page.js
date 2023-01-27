"use strict";
let first_number = 12;
let second_number = 23;
let third_number = 35;
const constant_number = 100;
let anna;
let hello = "Hello"
let world = "world"
let sum = first_number + second_number + third_number;
// sum all digits
alert("Sum all digits = " + sum + " and type of summ is '" + typeof(sum)  + "'");

//constant_number > sum?
alert((constant_number  + " > " + sum) + " " + (constant_number > sum));

//constant_number / sum
alert((constant_number  + " / " + sum) + " = " + (constant_number / sum));

//constant_number - sum
alert((constant_number  + " - " + sum) + " = " + (constant_number - sum));

//constant_number * sum
alert((constant_number  + " * " + sum) + " = " + (constant_number * sum));

//constant_number ** ((sum /= sum) + 2)
alert((constant_number  + " ** " + ((sum /= sum) + 2)) + " = " + (constant_number ** ((sum /= sum) + 2)));

//variable anna get values second_number
alert("Anna is " + second_number + " years old");

// sum two string
alert(hello + " " + world);

//В треугольнике ABC : DB – высота, AD = 1 , DC = 3 , ∠ DBC = 45 ∘ . Найдите площадь треугольника ABC.
let ad = 1;
let dc = 3;
//поскольку ∠ DBC = 45 ∘ BD = DC
let bd = dc;
let s = (ad + dc) * bd/2;
alert("Площадь треугольника ABC = " + s);