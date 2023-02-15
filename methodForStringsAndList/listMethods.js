"use strict";

const list = [1, 2, 3, 4, 5, "b", "a", "c"]

//concat մեթոդը ավելացնում է տրվաց արգումենտները մասիվին։
console.log(list.concat(5, 6));

//includes մեթոդը ստուգում է թե մեր մասիվը պարւնակում է տվյալ արգումենտից։
console.log(list.includes(2));

// length մեթոդը վերադարձնում է մասիվի մեջի էլեմենտների քանակը։
console.log(list.length);

// join մեթոդը ավելացնում է մասիվի բոլոր էլեմենտներին տրվաց արգումենտը և վերադարձնում է այն։
console.log(list.join(", 25 "));

//pop մեթոդը ջնջում է մասիվի վերջի էլեմենտը։
console.log(list.pop());

//push մեթոդը ավելացնում է մասիվի վերջում տրված արգումենտը։
console.log(list.push(9));

// reverse մեթոդը մասիվը դարձնում է հայլեային ձևով։
console.log(list.reverse());

// toString մեթոդը մասիվի վերադարձնում է ստրինգ տիպով։
console.log(list.toString());


// slice մեթոդը ընդունում է 1 կամ 2 արգումենտ։ 1 արգումենտով վերադարձնում է մասիվը սկսաց 
//ընդունվող արգումենից միչև վերջ։ 2 արգումենտով վերադարձնում է մասիվը սկսաց 
//ընդունվող արգումենից միչև 2֊րդ արգումենտի ինդեքսը։
console.log(list.slice(1));

// shift մեթոդը ջնըում է մասիվի առաջի էլեմենտը մասիվից և վերադարձնում է այն։
console.log(list.shift());

// sort մեթոդը ընդունում է որպես արգումենտ ֆունկցիա։ Ֆունկցիան էլ ընդունում է 
//2 արգումենտ։ Մասիվի 2֊րդ արգումենտից հանում է մասիվը արջին արգումենտը 
// եթե ստացված թիվը մեծ է 0֊ից ուրեմն դասավորվում է մասիվը ըստ աճման կարեգի,
// եթե թիվ է, իսկ եթե ստրինգ է ուրեմն ըստ այբենական կարգի։
console.log(list.sort((secondElement, firsElement) => secondElement - firsElement));

// find մեթոդը որպես արգումետ ընդունում է ֆունկցիա։ 
//Ֆունկցիան "ֆոր ֆրալով մասիվի վրա ստուգում է, 
//եթե էլեմենտը մեծ է 1֊ից վերադարձնում է տվյալ ելեմենտը"։Այիսինքն finde վերադարձնում է
// ֆուկցիայի առաջի ճիշտ return տարբերակը։
console.log(list.find(element => element > 1));

// findeindex մեթոդը որպես արգումետ ընդունում է ֆունկցիա։ 
//Ֆունկցիան "ֆոր ֆրալով մասիվի վրա ստուգում է, 
//եթե էլեմենտը հավասարա է 3֊ի, ապա վերադարձնում է տվյալ ելեմենտի ինդեքսը"։
//Այիսինքն findIndex վերադարձնում է ֆուկցիայի առաջի ճիշտ return տարբերակը։
console.log(list.findIndex(element => element === 3));

// filter մեթոդը որպես արգումետ ընդունում է ֆունկցիա։ 
//Ֆունկցիան "ֆոր ֆրալով մասիվի վրա ստուգում է, 
//եթե էլեմենտը առանց մնացորդ բաժանվում է 2֊ի անելացնւմ է նոր մասիվի մեջ 
//և վերջում վերադարձնում է տվյալ մասիվը"։
//Այիսինքն filter վերադարձնում է ֆուկցիայի return արած մասիվը։
console.log(list.filter(element => element % 2 == 0));

//reduce մեթոդը որպես արգումետ ընդունում է ֆունկցիա 2 արգումենտով։
//Առաջին արգւմենտը սկզբնական հավասար է 0, իսկ 2֊րդ արգւմենտը ստանում է 
//"ֆոր ֆրալով մասիվի վրա" Իրար գումարելով առաջի արգումենտը ստանում է ինչ որ արժեք 
//և դրան գումարվում է մասիվի հաջորդ էլեմենտը ը վերջում ստացված արդյունը տալիս է resultin?:  

let result = 0;
console.log(list.reduce((listValue, listValueN) => listValue + listValueN, result));

// map մեթոդը որպես արգումետ ընդունում է ֆունկցիա։ 
//Ֆունկցիան "ֆոր ֆրալով մասիվի վրա էլեմենտը բազմապատկում է 2֊ի և ստացված արժեքը 
//անելացնւմ է նոր մասիվի մեջ և վերջում վերադարձնում է տվյալ մասիվը"։
//Այիսինքն map վերադարձնում է ֆուկցիայի return արած մասիվը։
console.log(list.map(element => element * 2));