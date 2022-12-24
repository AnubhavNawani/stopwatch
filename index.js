let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
let watchState = false;

let start = () => {
    watchState= true;
    execute();
}

let stopWatch = () => {
    watchState = false;
}

let reset = () => {
    const ZERO = '00';
    hr = 0, min = 0, sec = 0, ms = 0;
    watchState = false;

    document.getElementById('hrs').innerHTML = ZERO;
    document.getElementById('min').innerHTML = ZERO;
    document.getElementById('sec').innerHTML = ZERO;
    document.getElementById('mil-sec').innerHTML = ZERO;
}

let execute = () => {
    if(watchState) {
        ms += 1;

        let hrString = "";
        let minString = "";
        let secString = "";

        if(ms == 99) {
            ms = 0;
            sec += 1;
        }

        if(sec == 59) {
            sec = 0;
            min += 1;
            ms = 0;
        }

        if(min == 59) {
            min =0;
            hr += 1;
        }

        if(sec < 10) {
            secString = "0" + sec;
        } else {
            secString = sec;
        }

        if(min < 10) {
            minString = "0" + min;
        } else {
            minString = min;
        }

        if(hr < 10) {
            hrString = "0" + hr;
        } else {
            hrString = hr;
        }

        document.getElementById('hrs').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('mil-sec').innerHTML = ms;
        setTimeout("execute()" , 10);
    }
}