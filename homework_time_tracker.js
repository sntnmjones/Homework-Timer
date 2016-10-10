var date1h;
var date1m;
var date1s;
var date2h;
var date2m;
var date2s;
var curDate;
var curMon;
var curYear;
var t;

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function createDurationDiv() {
    var div = document.createElement('div');
    div.setAttribute('class', 'select');
    div.setAttribute('id', 'time1');

    document.getElementById('container').appendChild(div);

    var div1 = document.createElement('div');
    div1.setAttribute('class', 'select');
    div1.setAttribute('id', 'duration');

    document.getElementById('container').appendChild(div1);
}

function timeStart() {
    var today = new Date();
    date1h = today.getHours();
    date1m = today.getMinutes();
    date1s = today.getSeconds();
    date1m = checkTime(date1m);
    date1s = checkTime(date1s);
    curMon = today.getUTCMonth();
    curMon = curMon + 1;
    curDate = today.getUTCDate();
    curYear = today.getUTCFullYear();

    createDurationDiv();
    document.getElementById('time1').innerHTML =curMon + "/" + curDate + "/" + curYear + "  " + date1h + ":" + date1m + ":" + date1s;

    totalTime();
}

function timeStop() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    var div = document.createElement('div');
    div.setAttribute('class', 'select');
    div.setAttribute('id', 'time2');

    document.getElementById('container').appendChild(div);

    document.getElementById('time2').innerHTML = curMon + "/" + curDate + "/" + curYear + "  " + date2h + ":" + date2m + ":" + date2s;
    clearTimeout(t);
}

function totalTime() {
    var today = new Date();
    date2h = today.getHours();
    date2m = today.getMinutes();
    date2s = today.getSeconds();
    date2m = checkTime(date2m);
    date2s = checkTime(date2s);
    var h = date2h - date1h;
    var m = date2m - date1m;
    var s = date2s - date1s;

    document.getElementById('duration').innerHTML =
    h + " hours " + m + " minutes " + s + " seconds ";
    t = setTimeout(totalTime, 500);
}