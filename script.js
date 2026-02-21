let timer;
let seconds = 0;

function start() {
    timer = setInterval(updateTime, 1000);
}

function stop() {
    clearInterval(timer);
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    document.getElementById("display").innerText = "00:00:00";
}

function updateTime() {
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.getElementById("display").innerText =
        format(hrs) + ":" + format(mins) + ":" + format(secs);
}

function format(num) {
    return num < 10 ? "0" + num : num;
}