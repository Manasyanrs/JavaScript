"use strict"

function MyDate(year, month, date, hour, minuts, second) {

    let self = this;
    this.year = checkYear();

    this.month = checkMonth();
    this.date = checkDate();

    this.hour = hour;
    this.minuts = minuts;
    this.second = second;


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

    function checkYear() {
        if (year === undefined) {
            return new Date();
        } else if (typeof year === "string") {
            let corYearType = correctYearString(year)
            return parseInt(corYearType.split(",")[0]);

        } else if (typeof year === "number" && typeof month === "undefined") {
            return new Date(0);
        } else {
            return year;
        }
    }


    function checkMonth() {
        if (typeof year === "string") {
            let corYearType = correctYearString(year)

            let checkMonth = parseInt(corYearType.split(",")[1]);
            console.log(checkMonth);
            return correctMonth(checkMonth)
        } else if (typeof month === "number") {
            return correctMonth(month)
        }
    }

    function correctMonth(month) {
        if (month > 11) {
            self.year += parseInt(month / 11);
            if (month % 11 == 0) {
                return 0;
            }
            return parseInt(month % 11) - 1;
        } else if (month < 0) {
            self.year += parseInt(month / 11);
            return (month * -1 % 11)
        }
        return month;
    }

    function daysInMonth(month) {
        let daysInMonth = new Map([[0, 31], [1, 28], [2, 31],
        [3, 30], [4, 31], [5, 30],
        [6, 31], [7, 31], [8, 30],
        [9, 31], [10, 30], [11, 31],])
        return daysInMonth.get(month)
    }

    function checkDate() {
        if (typeof year === "string") {
            let corYearType = correctYearString(year)

            let checkDate = parseInt(corYearType.split(",")[2]);
            return correctDate(checkDate)
        } else if (typeof date === "number") {
            return correctDate(date)
        }
    }

    function correctDate(date) {
        let dayInMonth = daysInMonth(self.month);
        if (date > dayInMonth) {
            self.month += parseInt(date / dayInMonth);
            self.month = correctMonth(self.month)

            if (date % dayInMonth == 0) {
                return 1;
            }
            return date % dayInMonth;
        } else if (date < 0) {
            let modDate = date % dayInMonth;
            let d = parseInt(date / dayInMonth);

            if (self.month + d >= 0) {
                self.month += d;
            } else {
                self.month = (11 + (d % 11))
                self.year += (d % 11)
            }
            return modDate * -1;
        }
        return date;
    }


    this.setFullYear = function (year, month, date) {
        if (typeof year != "number" && typeof month != "number" && typeof date != "number") {
            this.year = NaN;
            this.month = NaN;
            this.date = NaN;

        } else if (typeof year === "number") {
            if (year > 1970) {
                this.year = (year - 1970) * 24 * 3600 * 1000 * 365

            } else {
                this.year = (year + 1970) * 24 * 3600 * 1000

            }
        } else if (typeof month === "number") {
            checkMonth(month)
        } else if (typeof date === "number") {
            checkDate(date)
        }
        return this.year;

    }



    this.getFullYear = function () {
        if (typeof year === "undefined" || typeof year === "number" && typeof month === "undefined") {
            return 1970;
        }
        return this.year;

    }

    this.getMonth = function () {
        if (typeof year === "undefined" || typeof year === "number" && typeof month === "undefined") {
            return 0;
        }
        return this.month;
    }

    this.getDate = function () {
        if (typeof year === "undefined" || typeof year === "number" && typeof month === "undefined") {
            return 1;
        } else if (typeof this.date === "undefined") {
            return 1;
        }
        return this.date;
    }

    this.getHours = function () {
        
        if (typeof year === "undefined" || typeof year === "number" &&
            typeof month === "undefined" || typeof date === "undefined") {
            return 0;

        } else if (typeof year === "number" && typeof month === "number" &&
            typeof date === "number" && typeof hour === "undefined") {
            return 0
        }
        return "23";
    }

    this.getMinutes = function () {
        if (typeof year === "undefined" || typeof year === "number" &&
            typeof month === "undefined" || typeof this.date === "undefined") {
            return 0;
        } else if (typeof year === "number" && typeof month === "number" &&
            typeof this.date === "number" && typeof hour === "undefined") {
            return 0
        }
        // return this.date;
    }

    this.getSeconds = function () {
        if (typeof year === "undefined" || typeof year === "number" &&
            typeof month === "undefined" || typeof this.date === "undefined") {
            return 0;
        } else if (typeof year === "number" && typeof month === "number" &&
            typeof this.date === "number" && typeof hour === "undefined") {
            return 0
        }
        // return this.date;
    }

}


let md = new MyDate(2000);
// console.log("md.getMyFullYear()====" + md.getFullYear());
// console.log("md.getMyMonth() =====" + md.getMonth());
// console.log("md.getMyDate() ======" + md.getDate());
// console.log("md.getMyHours() ====" + md.getHours());
// console.log("md.getMyMinute()====== " + md.getMinutes());
// console.log("md.getMySecond()===== " + md.getSeconds());

// md.setFullYear(2000)
// console.log("md.setFullYear()===== " + md);

console.log("md.setFullYear()===== " + md.setFullYear(2000));

