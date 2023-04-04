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


function p(obj, doc) {
    let keys = document.createElement(`ul`);
    doc.append(keys);

    for (let i in obj) {
        let keys1 = document.createElement(`li`);
        keys1.textContent = i;
        keys.append(keys1);

        if ("object" === typeof obj[i]) {
            p(obj[i], keys1);
        }
    }
}
p(data, document.body);
