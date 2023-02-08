"use strict"


function Contact(phoneNumber, adress, email) {
    this.phoneNumber = phoneNumber,
        this.adress = adress,
        this.email = email
}

function Employee(firstName, lastName, age, gender) {
    this.contacts = [];
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.salary = 0;

    this.addContacs = function (phoneNumber, adress, email) {
        let userContact = new Contact(phoneNumber, adress, email)
        this.contacts = userContact;
    };
}

function MobileCenter() {
    this.delivery = true;
    this.product = [];
    this.employee = [];
    this.shopeAdress = [];
    this.networAdress = {
        region: [],
        city: [],
        adress: []
    };

    this.addProduct = function (brand, model, coast) {
        this.product[this.product.length] = { brand, model, coast }
    }

    this.addEmployee = function (User) {
        if (User.age < 16) {
            console.log(`UPS! You may not work beucuse your age is ${User.age}.\nGood by!`);

        } else if (User.age > 65) {
            console.log(`You are too old for our work beucuse your age is ${User.age}.\nGood by!`);
        }
        else {
            console.log(`${User.firstName} you are hired.`);
            this.employee[this.employee.length] = User;
        }
    }

    this.addStoreContacts = function (phoneNumber, adress, email) {
        let shopContact = new Contact(phoneNumber, adress, email)
        this.shopeAdress = shopContact;
    }

    this.addNetworkAdress = function (region1, city, phoneNumber, adress, email) {
        let networAdress = new Contact(phoneNumber, adress, email);
        this.networAdress.region[this.networAdress.region.length] = { region1 }
        this.networAdress.city[this.networAdress.city.length] = { city }
        this.networAdress.adress[this.networAdress.adress.length] = { networAdress }
    }

    this.makeDelevery = function () {
        if (this.delivery === true) {
            let deliveryAdress = prompt("Enter delevery adress.");
            console.log(`Delivery to ${deliveryAdress}  on time`);
        } else {
            console.log("Sorry, our store does not deliver");
        }
    }

    this.changeSalary = function (employeeName, salary) {
        let flag = true;
        for (let index = 0; index < this.employee.length; index++) {
            const element = this.employee[index];
            for (const key in element) {
                if (element[key] === employeeName) {
                    element["salary"] = salary;
                    flag = false;
                    break;
                }
            }
        }
        if (flag) {
            console.log(`We dous not have employ for name ${employeeName}`);
        }
    }
}


let user = new Employee("Radik", "Manasyan", 15, "M");
let secondUser = new Employee("Petros", "Petrosyan", 25, "M")
let thirdUser = new Employee("Pamela", "Anderson", 75, "FM")

user.addContacs(+37498867166, "SPB", "radikmanasyan@gmail.com")


let shop = new MobileCenter();
shop.addEmployee(user);
shop.addStoreContacts(+3749852145, "Yerevan", "MobileCenter.am");

shop.addNetworkAdress("Shirak", "Gyumri", +374956321, "Leningradyan 14/7", "mobilecentersayat.nova.am")
shop.addNetworkAdress("Shirak", "Artik", +710481724, "Sayat-Nova 14", "mobilecentersayat.nova.am")
shop.addNetworkAdress("Shirak", "Maralik", +58963214, "Garegin Njdeh 25", "mobilecentersayat.nova.am")

shop.makeDelevery();
shop.delivery = false;
shop.makeDelevery();

shop.addEmployee(secondUser)
shop.addEmployee(thirdUser)

shop.changeSalary("Radik", 125000)
shop.changeSalary("Petros", 1255000)
shop.changeSalary("Pamela", 55000)

shop.addProduct("Samsung", "S22 Ultra +", 1250000)
shop.addProduct("Sony", "K75", 50000)
shop.addProduct("I Phone", "S14", 950000)
shop.addProduct("Honor", "A56", 85000)

console.log(shop);
