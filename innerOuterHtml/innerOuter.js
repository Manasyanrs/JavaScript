let data = {
    "Fish": {
        "trout": {},
        "salmon": {}
    },

    "Tree": {
        "Huge": {
            "sequoia": {},
            "oak": {}
        },
        "Flowering": {
            "apple tree": {},
            "magnolia": {}
        }
    }
};


function p(obj) {
    for (let i in obj) {
        if ("object" === typeof obj[i] && Object.keys(obj[i]).length > 1) {
            let keys1 = document.createElement(`li`);
            keys1.innerHTML = `<li>${i}</li>`;
            document.querySelector(`.ul`).append(keys1);
            p(obj[i]);

        } else {
            let keys = document.createElement(`ul`);
            keys.innerHTML = `<li>${i}</li>`;
            document.querySelector(`.ul`).append(keys);

        }

    }
}

document.body.innerHTML = `<div class = "fish"></div>`;


document.querySelector(`.fish`).innerHTML = `<ul class = "ul"></ul>`;
p(data)
