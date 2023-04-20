"use strict"

let counter = 1;

const regionList = ["", "Երևան", "Արագածոտն", "Արարատ", "Արմավիր", "Գեղարքունիք",
    "Կոտայք", "Լոռի", "Շիրակ", "Սյունիք", "Տավուշ", "Վայոց ձոր"];

const cityList = [["", ""], ["Երևան"], ["Աշտարակ", "Ապարան", "Թալին"], ["Արարատ", "Արտաշատ", "Մասիս", "Վեդի"],
["Արմավիր"], ["Կամոյ", "Կրասնոսելսկ", "Մարտունի", "Սևան", "Վարդենիս"],
["Հրազդան", "Աբովյան", "Չարենցավան", "Եղվարդ", "Բյուրեղավան", "Նոր Հաճն", "Ծաղկաձոր"],
["Վանաձոր", "Սպիտակ", " Ալավերդի", "Ստեփանավան", "Տաշիր", "Ախթալա", "Թումանյան", "Շամլուխ"], ["Գյումրի", "Արթիկ", "Մարալիկ"],
["Ագարակ", "Գորիս", "Դաստակերտ", "Կապան", "Մեղրի", "Սիսիան", "Քաջարան"], ["Իջևան", "Դիլիջան", "Բերդ", "Նոյեմբերյան", "Այրում"],
["Ջերմուկ", "Վայք", "Եղեգնաձոր"]];

let checkRegion;
let checkCity;

const regionOption = document.forms.selectRegionAndCity.regions;


for (let i = 0; i < regionList.length; i++) {
    const createOption = new Option(regionList[i], i);
    regionOption.options.add(createOption);
}

const regions = document.querySelector("#regions");


const cityOption = document.forms.selectRegionAndCity.city;



regions.addEventListener('change', () => {
    cityOption.innerHTML = "";
    let createOption;

    const cityInRegion = cityList[regions.value];
    checkRegion = regionList[regions.value];

    for (let i = 0; i < cityInRegion.length; i++) {
        createOption = new Option(cityInRegion[i], i);

        cityOption.appendChild(createOption);

    }

});

const city = document.querySelector("#city");

city.addEventListener("blur", () => {
    checkCity = "";
    checkCity = cityList[regions.value][city.value];
})


const imputN = document.querySelector("#imputName");
imputN.addEventListener("blur", function () {
})

const imputSN = document.querySelector("#imputSurname");
imputSN.addEventListener("blur", function () {
})

const info = document.querySelector("#info");
const button = document.getElementById("button");

button.addEventListener("click", function () {
    const p = document.createElement('p');
    info.append(p);
    if (info.textContent.includes(`${checkRegion}, ${checkCity}, ${imputN.value}, ${imputSN.value}`)) {
        alert("this.contains")
    } else {
        p.innerHTML = `${counter++}. ${checkRegion}, ${checkCity}, ${imputN.value}, ${imputSN.value}`;

    }
})
