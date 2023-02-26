"use strict"

function MyDate(year = 1970, month = 0, days = 1, hour = 0, minutes = 0, second = 0) {
    const strMonth = ["Yan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dev"]
    let self = this;

    this.year = checkYear();
    this.month = month;
    this.days = days;

    this.hour = hour;
    this.minutes = minutes;
    this.second = second(second);



    this.setFullYear = function (yearValue, monthValue, day) {
        if (typeof yearValue != "number" && typeof monthValue != "number" && typeof day != "number") {
            self.year = 2023;
            self.month = 1;
            self.day = 1;

        } else if (typeof yearValue === "number" && typeof monthValue === "number" && typeof day === "number") {
            self.year = yearValue;
            days = checkDays(day);
            month = checkMonth(monthValue + month)

        } else {
            self.year = 2023;
            self.month = 1;
            self.day = 1;
        }
    }
    this.setYear = function (arg) {
        self.year = arg;
    }
    this.checkMonth = function (arg) {
        while (arg >= 11) {
            if (month >= 11) {
                self.month = month % 11;
                self.year++;
            }
            arg -= 11;
            month += 11;
            self.year++;
        }
        month = arg;
    }
    this.checkDays = function (arg) {
        while (arg > daysInMonth(month)) {
            if (self.month == 11) {
                self.month = 0;
                self.year++;
            }
            arg -= daysInMonth(month);
            self.month++;
        }
        self.days = arg;
        self.month = daysInMonth(month);

    }
    this.checkHour = function (arg) {
        if (arg < 24) {
            self.year = 1970;
            self.hour = arg;
        } else {
            days = parseInt(arg / 24);
            if (days > daysInMonth(month)) {
                checkDays(days);
            } else {
                self.days = days;
            }
            self.hour = arg % 24;
        }
    }
    this.checkMinutes = function (arg) {
        if (arg < 60) {
            self.year = 1970;
            self.minutes = minutes;
        } else {
            hour = parseInt(arg / 60);

            if (hour > 24) {
                checkHour(hour)
                minutes = arg % 60;
            } else {
                self.hour = hour
            }

        }
    }
    this.second = function (arg = 0) {
        if (arg < 60 || !arg) {
            self.year = 1970;
            self.minutes = arg;
            self.second = arg;

        } else {
            minutes = parseInt(arg / 60);

            if (minutes > 60) {
                checkMinutes(minutes)
            } else {
                self.minutes = minutes
            }
            return arg % 60;
        }
    }
    function daysInMonth(month) {
        let daysInMonth = new Map([[0, 31], [1, 28], [2, 31],
        [3, 30], [4, 31], [5, 30],
        [6, 31], [7, 31], [8, 30],
        [9, 31], [10, 30], [11, 31],])
        return daysInMonth.get(month)
    }


    function checkYear() {
        if (year === undefined) {
            return (new Date()).getFullYear();
        } else if (typeof year === "string") {
            let corYearType = correctYearString(year)
            return parseInt(corYearType.split(",")[0]);

        } else {
            return year;
        }
    }
    function correctYearString(stringYear) {
        let result = "";
        for (let index = 0; index < stringYear.length; index++) {
            if (parseInt(stringYear[index])) {
                result += stringYear[index]

            } else if (stringYear[index] === "0") {
                result += "0"
            } else {
                result += ","
            }
        }
        return result;
    }


    this.getFullYear = function (arg) {
        if (!arg) {
            second(1)
            console.log(`${strMonth[this.getMonth()]} ${self.days} ${self.year} ${self.getHour()}:${self.getMinutes()}:${this.getSeconds()}`);
        }
        this.setYear(arg);
        self.minutes = 0;
        self.second = 0;
        return self.year;
    }
    this.getYear = function () {
        return this.year;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getDays = function () {
        return (this.days);
    }
    this.getHour = function () {
        return (self.hour < 10) ? "0" + self.hour : self.hour;
    }
    this.getMinutes = function () {
        return (self.minutes < 10) ? "0" + self.minutes : self.minutes;
    }
    this.getSeconds = function () {
        return (self.second < 10) ? "0" + self.second : self.second;
    }

}
