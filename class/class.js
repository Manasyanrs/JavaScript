"use strict"

class MyDate {
    // _year = 0;
    // _month = 0;
    // _day = 0;
    // _hour = 0;
    // _minutes = 0;
    // _second = 0;
    _strMonth = ["Yan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    _deysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    constructor(year=1970, month=0, day=1, hour=0, minutes=0, second=0) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minutes = minutes;
        this.second = second;

    }

    set setFullYear(y) {
        if (typeof y != "string") {
            this.year = y;
        } else {
            let arg = y.split(",");

            if (arg[0]) {
                this.year = parseInt(arg[0]);
            }
            if (arg[1]) {
                this.month += parseInt(arg[1]);
                this.setMonth = parseInt(this.month);
            } else {
                this.month = 0;
            }
            if (arg[2]) {
                this.day += parseInt(arg[2]);
                this.setDay = parseInt(this.day);
            } else {
                this.day = 1;
            }
        }
    }

    set setYear(arg) {
        if (arg) {
            this.year = arg;
        }
    }

    set setMonth(arg) {
        this.month += arg;
        if (this.month) {
            while (this.month > 11) {
                this.year++;
                if (this.month == 11) {
                    this.month = 0;
                }
                this.month -= 11;
            }
        }
    }

    set setDay(arg) {
        this.day += arg;

        if (this.day) {
            while (this.day > this._deysInMonth[this.month]) {
                if (this.month == 11) {
                    this.month = 0;
                    this.year++;
                }
                this.day -= this._deysInMonth[this.month];
                this.month++;
            }
        }
    }

    set setHour(arg) {
        this.hour += arg;
        if (this.hour > 24) {
            this.hour = arg % 24;
            this.setDay = parseInt(arg / 24);
        }
    }

    set setMinutes(arg) {
        this.minutes += arg;
        if (this.minutes > 60) {
            this.minutes = arg % 60;
            this.setHour = parseInt(arg / 60);
        }

    }

    set setSecond(arg) {
        if (arg < 60 || !arg) {
            this.second = arg;

        } else {
            this.setMinutes = (parseInt(arg / 60));
            this.second = arg % 60;
        }
    }

    get getFullYear() {
        return `${this._strMonth[this.month]} ${this.getDay} ${this.year} ${this.hour}:${this.minutes}:${this.second}`
    }

    get getYear() {
        return this.year;
    }
    get getMonth() {
        return this.month;
    }

    get getDay() {
        return this.day;
    }

    get getHour() {
        return this.hour;
    }

    get getMinutes() {
        return this.minutes;
    }

    get getSeconds() {
        return this.second;
    }
}


let m = new MyDate(2000, 2, 30, 25, 32, 30);
m.setFullYear = "2004, 10, 10";
m.setMinutes = 2990;
m.setDay = 90;
console.log(m.getFullYear);
console.log(m);
