"use strict";

const text = " Hello Java Script. ";

//charAt մեթոդը ընդունում է թիվ։Կիրառվում է տեքստին և վերադարձնում տվյալ ինդեքսով տեքստի արժեքը։
console.log(text.charAt(1));

//concat մեթոդը ընդունում է պարզ տիպ։ Ստեղծում է նոր պարզ տիպ և ավելացնում է հնին ընդունող արժեքը։ 
console.log(text.concat(" This method worked how + operator."));

//startsWith մեթոդը ընդունում է պարզ տիպ և ստուգում է սկսվում է արդյոք տեքստը տրված պարզ տիպի արժեքով, վերադարձնելով true կամ false։
console.log(text.startsWith(1));

//endsWith մեթոդը ընդունում է պարզ տիպ և ստուգում է վերջանում է արդյոք տեքստը տրված պարզ տիպի արժեքով, վերադարձնելով true կամ false։
console.log(text.endsWith(1));

//includes մեթոդը ընդունում է string տիպ և ստուգում է պարունակում է արդյոք մեր տեղքստը ընդւնվող արգումենտից, վերադարձնելով true կամ false։
console.log(text.includes("ava"));

//indexOf մեթոդը ընդունում է string տիպ(նաև որ երորդ ինդեքսից սկսած) և ստուգում է պարունակում է արդյոք մեր տեղքստը 
//ընդւնվող արգումենտից, վերադարձնելով սկսվող ինդեքսը եթե չկա վերադարձնում է ֊1։
console.log(text.indexOf("el") + " : " + text.indexOf("Scr", 15));

//length մեթոդը վերադարձնում է տվյալ տեքստի լայնքը։
console.log(text.length);

//replace մեթոդը ընդունում է 2 արգումենտ(արգումենտ և փոփոխվող արգումենտի արժեք)։ Կիրառելով տեքստին ստեղծում է 
// նոր փոփոխված տեքստ։ 
console.log(text.replace("e", "o"));

//slice մեթոդը ընդունում է 1 կամ 2 արգումենտ(սկսվող և վերջացող ինդեքդս)։Կիրառելով տեքստին ստեղծում է 
// նոր տեքստ սկսվող ինդեքսից մեչև վերջ կամ մինչև վերաջող ինդեոսը։ 
console.log(text.slice(5), text.slice(8, 12));

//split մեթոդը տեքստը բանանում է իրարից ընդունվող արգումենտով։
console.log(text.split(" "));

//substring մեթոդը ընդունում է 1 կամ 2 արգումենտ(սկսվող և վերջացող ինդեքդս): 
//Եթե 1 արգումենտ է ընդունել ուրեմն վերադարձնում է տվյալ տեքստի արգումենտից մինջև վերջ, 
//իսկ 2 արգումենտի դեպքում վերադարձնում է արաջի և երկրորդ արգումենտների արան՝ում եղած տեքստը։
console.log(text.substring(2), text.substring(2, 9));

//trim մեթոդը ջնջում է տեքստի սկզբում և վերջում եղած պրոբելները։
console.log(text.trim());

//toLowerCase մեթոդը տեքստը վերադարձնում է ամբողջությամբ փոքրատառ։
console.log(text.toLowerCase());

//toLowerCase մեթոդը տեքստը վերադարձնում է ամբողջությամբ մեծատառ։
console.log(text.toUpperCase());