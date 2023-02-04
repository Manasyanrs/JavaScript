"use strict"


function drugstore(drugstoreName, director,
    contacts, networkDragstore, schedule, delivery, employee, product) {
    return {
        drugstoreName: drugstoreName,
        director: director,
        contacts: [{ contacts }],
        networkDragstore: [{ networkDragstore }],
        schedule: [schedule],
        delivery: delivery,
        employees: [{ employee }],
        product: [{ product }]
    }
}

function makeProduct(productName, expirationDate, countProduct) {
    return {
        productName: productName,
        expirationDate: expirationDate,
        countProduct: countProduct
    }
}

function makeEmployee(firsName, LastName, gender, employeeContact) {
    return {
        firsName: firsName,
        LastName: LastName,
        gender: gender,
        employeeContact: [{ employeeContact }]
    }
}

function makeContacts(adress, phoneNumber, fax = NaN, email) {
    return {
        adress: adress,
        phoneNumber: phoneNumber,
        fax: fax,
        email: email
    }
}

function makeNetworkDragstore(object) {
    // drugstore(drugstoreName, adress, employee, director, contacts, networkDragstore, schedule, delivery);
    return {
        object: object
    }
}

function makeSchedule(scheduleList) {
    let schedule = "";
    for (let i = 0; i < scheduleList.length; i++) {
        schedule += scheduleList[i];
    }
    return schedule;
}



let gagoContacts = makeContacts("Երևան Սարի թաղ փ․8 շ․666", "+37410626385", "Չունինք", "Khasninq24@.hasanq.am");
let emlpoyeGago = makeEmployee("Գագիկ", "Ծառուկյան", "Արական", gagoContacts);
let midleDrugContact = makeContacts("Բաղրամյան 28", "+374********", "+374???????", "Դուխով կբուժվեք@թրաշ․սպիտակ");
let scheduleGagosDragstore = makeSchedule(["Երբ կամենանք"]);


let dragstoreName = "Help 24 hour";
let director = "Նիկոլ Փաշինյան";
let product = NaN;
let delivery = false;

let midleDrugstore = drugstore(dragstoreName, director, midleDrugContact, NaN,
    scheduleGagosDragstore, delivery, emlpoyeGago, product);


let annasContact = makeContacts("Rim st. Ohaya 1 App. 88", "+543256987", NaN, "annasEmail@gmail.com");
let employeeAnna = makeEmployee("Anna", "Shmit", "female", annasContact);

let angelaContact = makeContacts("Lacio", "+1254736666", "+984753", "Angelamail@index.by");
let employeeAgela = makeEmployee("Angela", "Merkel", "female", angelaContact);

let cleaner = makeEmployee("Joe", "Biden", "Male");
let security = makeEmployee("Donald", "Trump", "Male");

let contactsAlpha = makeContacts("Москва пр. Ленина 125", "+37489666333", "NaN", "BjishkHasi@alfa.fm");
let scheduleAlpha = makeSchedule(["Понедельник-пятница: с 09:30 до 16:30\nСуббота-воскресенье: выходные дни"]);

let analgint = makeProduct("Analgin", "22.02.2022-22.02.2025", 97);
let nurofen = makeProduct("Nurofen", "22.02.2022-22.02.2027", 225);
let pampers = makeProduct("Pampers", "22.01.2023-22.12.2024", 900);
let petrolatum = makeProduct("Petrolatum", NaN, 74);

dragstoreName = "Alpha";
director = "В.В. Путин";
let employeesList = [employeeAnna, employeeAgela, cleaner, security];
product = [analgint, nurofen, pampers, petrolatum];
delivery = true;

let drugstoreAlpha = drugstore(dragstoreName,
    director, contactsAlpha, midleDrugstore, scheduleAlpha, delivery,
    [employeesList], product,);
console.log(drugstoreAlpha)
