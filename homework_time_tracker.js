var date1h;
var date1m;
var date1s;
var date2h;
var date2m;
var date2s;
var t;

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function timeStart(date1, date2) {
    var today = new Date();
    date1h = today.getHours();
    date1m = today.getMinutes();
    date1s = today.getSeconds();
    date1m = checkTime(date1m);
    date1s = checkTime(date1s);
    document.getElementById('time1').innerHTML =
    date1h + ":" + date1m + ":" + date1s;
    totalTime();
}

function timeStop(date2) {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time2').innerHTML = 
    date2h + ":" + date2m + ":" + date2s;
    clearTimeout(t);
}

function totalTime(date1, date2) {
    var today = new Date();
    date2h = today.getHours();
    date2m = today.getMinutes();
    date2s = today.getSeconds();
    date2m = checkTime(date2m);
    date2s = checkTime(date2s);
    var h = date2h - date1h;
    var m = date2m - date1m;
    var s = date2s - date1s;
    document.getElementById('total').innerHTML =
    h + ":" + m + ":" + s;
    t = setTimeout(totalTime, 500);
}