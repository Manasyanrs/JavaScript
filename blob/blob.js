"use strict"


const button = document.getElementsByTagName("button")[0];
button.onclick = function () {

    const file = document.getElementById("file").files[0];
    const fReader = new FileReader();
    fReader.readAsText(file);
    fReader.onload = async function () {
        const trimArray = fReader.result.split("\n");

        const func = findeFunction(trimArray);
        const variable = findeVariables(trimArray);
        const list = findList(trimArray);
        const obj = findObj(trimArray);
        
        // TODO չի ստացվում ստացվաց պռոմիսները ամբողջությամբ ավելացնել html-ի մեջ։
        renderInfo(func, "Functions");
        renderInfo(variable, "Variables");
        renderInfo(list, "Lists");
        renderInfo(obj, "Objects");


    }
}

function findeFunction(array) {
    return new Promise((resolve) => {
        let functionList = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].startsWith("function")) {
                functionList.push(array[i] + " };")
            }
        }
        resolve(functionList);
    })
}

function findeVariables(array) {
    return new Promise((resolve) => {
        let variablesList = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].startsWith("let") && !array[i].includes("=")) {
                variablesList.push(array[i])
            }
        }
        resolve(variablesList);
    })
}

function findList(array) {
    return new Promise((resolve) => {
        let findList = [];
        for (let i = 0; i < array.length; i++) {
            if (array[i].startsWith("let") && array[i].includes("[") || array[i].startsWith("const") && array[i].includes("[")) {
                findList.push(array[i])
            }
        }
        resolve(findList);
    })
}

function findObj(array) {
    return new Promise((resolve) => {
        let startIndex = null;
        let endIndex = null;
        let findObj = [];

        for (let i = 0; i < array.length; i++) {
            if (array[i].startsWith("let") && array[i].includes("{") ||
                array[i].startsWith("const") && array[i].includes("{")) {
                startIndex = i;

                while (!array[i].includes("};")) {
                    ++i;
                    endIndex = i + 1;

                }
                if (endIndex != null) {
                    findObj.push(array.slice(startIndex, endIndex));
                    endIndex = null

                } else {
                    findObj.push(array.slice(startIndex));

                }
            }
        }
        resolve(findObj);
    })
}

function renderInfo(promis, text) {
    const content = document.getElementById("content");

    promis.then((resolve) => {
    content.innerHTML = `<h1>${text}</h1>`;
        for (let i = 0; i < resolve.length; i++) {
            let div = document.createElement("div")
            div.innerText = `${i + 1}: ${resolve[i]}`
            content.append(div)
        }
    })
}

