"use strict"

class Clock {

    constructor(h, m, s = 0) {
        this._hour = h;
        this._minuts = m;
        this._seconds = s;
        this.alerts = new Map();

    }

    static delay(s) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, s * 1000)
        })
    }
    update() {
        if (this._seconds > 59) {
            this._minuts += 1;
            this._seconds = 0;
            if (this._minuts > 59) {
                this._hour += 1;
                this._minuts = 0;
                if (this._hour > 23) {
                    this._hour = 0
                }
            }
        }
        const time = this._hour * 3600 + this._minuts * 60 + this._seconds;
        if (this.alerts.has(time)) {
            const list = this.alerts.get(time);
            for (const iterator of list) {
                iterator()
            }
        }
        console.log(this.#toStringHour());
    }
    async start() {
        while (true) {
            await Clock.delay(1);
            this._seconds++;
            this.update();
        }
    };

    setAlert(hours, minutes, seconds) {
        let self = this

        return new Promise((resolve) => {
            const time = hours * 3600 + minutes * 60 + seconds
            if (!self.alerts.has(time)) {
                self.alerts.set(time, [resolve]);
            } else {
                self.alerts.get(time).push(resolve);
            }
        }
        )
    }

    #toStringHour() {
        let hour = (this._hour < 10) ? "0" + this._hour : this._hour;
        let min = (this._minuts < 10) ? "0" + this._minuts : this._minuts;
        let sec = (this._seconds < 10) ? "0" + this._seconds : this._seconds;
        return `${hour}:${min}:${sec}`;
    }
}


let clock = new Clock(17, 30, 55);

clock.start();

clock.setAlert(17, 30, 59).then(() => {
    console.log("Tanic dus gal ");
});

clock.setAlert(17, 31, 1).then(() => {
    console.log("JS-i Dasi em");
});