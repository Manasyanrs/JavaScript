function Person(name, surName, age, gender) {
    this.name = name,
        this.surName = surName,
        this.age = age,
        this.gender = gender

    this.getName = function () {
        return this.name
    }
}

function Doctor(name, surName, age, gender, speciality, phoneNumber, email) {
    this.__proto__ = new Person(name, surName, age, gender)
    this.speciality = speciality,
        this.phoneNumber = phoneNumber,
        this.email = email,
        this.patients = []

    this.addPatoents = function (patients) {
        this.patients.push(patients);
    }

}

function Patients(name, surName, age, gender, registerTime, doctor) {
    this.self = this,
        this.__proto__ = new Person(name, surName, age, gender),
        this.registerTime = registerTime,
        this.doktorName = checkDoctor(doctor)

    function checkDoctor(doktorName) {
        //TODO hov to check doctors name in object true or folse 
        if (Object.getName(doctor)) {
            Object.addPatoents(this.Patients)
        } else {
            console.log("We dos not have doctor " + doktorName);
        }
    }
}


function MedicalCenter(name, address, phone) {
    this.name = name,
        this.address = address,
        this.phone = phone,
        this.personal = []

    this.addPersonal = function(object){
        if(object instanceof Doctor()){
            this.personal.push(object)
        }else{
            console.log("Plese add doctor type");
        }
    }
}

let doctor = new Doctor("Bob", "Billy", 25, "M", "Dantist", "+98562", "bob@mail.com");
console.log(doctor);
let patients = new Patients("Mary", "Yan", 21, "FM", "25/20/2023", "Bob")
let mCenter = new MedicalCenter("911", "Isa/25", "856245");
mCenter.addPersonal(doctor)
console.log(mCenter);