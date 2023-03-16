"use strict"

class Clock {
    constructor(h, m, s) {
        this.hour = h;
        this.minuts = m;
        this.seconds = s;
    }

    start = function () {
        setInterval(() => {
            let sec = this.seconds++;
            if (sec === 59) {
                this.#setSecond();
            }
            console.log(this.#toStringHour());
        }, 1000)

    }

    #toStringHour() {
        let _hour = (this.hour < 10) ? "0" + this.hour : this.hour;
        let _min = (this.minuts < 10) ? "0" + this.minuts : this.minuts;
        let _sec = (this.seconds < 10) ? "0" + this.seconds : this.seconds;
        return `${_hour}:${_min}:${_sec}`
    }

    #setHour(arg) {
        if (arg === 23) {
            this.hour = 0;
        }
    }

    #setMinutes(arg) {
        if (arg === 59) {
            this.#setHour(this.hour++);
            this.minuts = 0;
        }

    }
    #setSecond() {
        this.#setMinutes(this.minuts++);
        this.seconds = 0;

    }

    setAlert = function (h, m, s) {
        let inputHourInMs = (h * 60 + m * 60 + s) * 1000;
        return new Promise((resolve, reject) => {
            setInterval(() => {
                if (inputHourInMs === (this.hour * 60 + this.minuts * 60 + this.seconds) * 1000) {
                    resolve(this.#toStringHour())

                }else if(inputHourInMs < (this.hour * 60 + this.minuts * 60 + this.seconds) * 1000) {
                    reject(new Error("Notification time cannot be less than the current time"))
                }
            })
        })
    }
}



const errorHandler = (error) => {
    console.log(error);
}


let clock = new Clock(17, 30, 5);
clock.start();

clock.setAlert(17, 30, 4).then((result) => {
    console.log("Tanic dus gal ", result);
}, errorHandler);


clock.setAlert(17, 31, 1).then((result) => {
    console.log("JS-i Dasi em", result);
}, errorHandler);