"use strict"

class MyDate {
    _year=0;
    _month=0;
    _day=0;
    _hour=0;
    _minutes = 0;
    _second = 0;
    _strMonth = ["Yan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    _deysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    constructor(year, month, day, hour, minutes, second) {
        this._setYear = year;
        this._setMonth = month;
        this._setDay = day;
        this._setHour = hour;
        this._setMinutes = minutes;
        this._setSecond = second;

    }

    set _setFullYear(y) {
        if (typeof y != "string") {
            this._year = y;
        } else {
            let arg = y.split(",");
            if (arg[0]) {
                this._year = parseInt(arg[0]);
            }
            if (arg[1]) {
                this._month = 0;
                this._setMonth = parseInt(arg[1]);
            } else {
                this._month = 0;
            }
            if (arg[2]) {
                this._day = 0;
                this._setDay = parseInt(arg[2]);
            } else {
                this._day = 1;
            }
        }
    }

    setFullYearr(y) {
        this._setFullYear = y;
    }


    set _setYear(arg) {
        if (arg) {
            this._year = arg;
        }
    }
    setYear(y) {
        this._setYear = y;
    }

    set _setMonth(arg) {
        this._month += arg;
        if (this._month) {
            while (this._month > 11) {
                this._year++;
                if (this._month == 11) {
                    this._month = 0;
                }
                this._month -= 11;
            }
        }
    }
    setMonth(v) {
        this._setMonth = v;
    }

    set _setDay(arg) {
        this._day += arg;

        if (this._day) {
            while (this._day > this._deysInMonth[this._month]) {
                if (this._month == 11) {
                    this._month = 0;
                    this._year++;
                }
                this._day -= this._deysInMonth[this._month];
                this._month++;
            }
        }
    }
    setDay(d) {
        this._setDay = d;
    }

    set _setHour(arg) {
        this._hour += arg;        
        if (this._hour > 24) {
            this._hour = arg % 24;
            this._setDay = parseInt(arg / 24);
        }
    }
    setHour(h){
        this._setHour = h;
    }

    set _setMinutes(arg) {
        this._minutes += arg;
        if (this._minutes > 60) {
            this._minutes = arg % 60;
            this._setHour = parseInt(arg / 60);
        }

    }

    setMinutes(minut){
        this._setMinutes = minut;
    }

    set _setSecond(arg) {
        if (arg < 60 || !arg) {
            this._second = arg;

        } else {
            this._setMinutes = (parseInt(arg / 60));
            this._second = arg % 60;
        }
    }
    setSecond(s){
        this._setSecond = s;
    }

    get _getFullYear() {
        return `${this._strMonth[this._month]} ${this._day} ${this._year} ${this._hour}:${this._minutes}:${this._second}`
    }

    getFullYear(){
        return `${this._strMonth[this._month]} ${this._day} ${this._year} ${this._hour}:${this._minutes}:${this._second}`

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
m.setFullYearr("2004, 10, 10");
m.setMinutes(90)
m.setDay(90)
console.log(m.getFullYear());
