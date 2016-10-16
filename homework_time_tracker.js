var date1h;
var date1m;
var date1s;
var date2h;
var date2m;
var date2s;
var curDate;
var curMon;
var curYear;
var totalHours;
var totalMinutes;
var totalSeconds;
var t;
var timeStarted = false;
var divName;
var divNum = 0;
var courseDiv;
var assignDiv;
var timeStartDiv;
var durationDiv;
var timeStopDiv;

document.cookie = "username=John";

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

// When Time Start is pressed
function timeStart() {
    if (!timeStarted) {
        divNum++;

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
        timeStartDiv = curMon + "/" + curDate + "/" + curYear + "  " + date1h + ":" + date1m + ":" + date1s;
        document.getElementById('time1').innerHTML = timeStartDiv;
        totalTime();
        timeStarted = true;
    }

}

// when Time Stop is pressed
function timeStop() {
    if (timeStarted) {
        createTimeStopDiv();
        timeStopDiv = curMon + "/" + curDate + "/" + curYear + "  " + date2h + ":" + date2m + ":" + date2s;
        document.getElementById('time2').innerHTML = timeStopDiv;
        courseDiv = document.getElementById('course').value;
        assignDiv = document.getElementById('assign').value;
        clearTimeout(t);

        var newContainer = document.createElement('div');
        divName = 'newDiv' + divNum;
        newContainer.setAttribute('id', divName);
        newContainer.setAttribute('class', 'addedDivs');
        if (divNum > 1) {
            var parentElement = document.getElementById('results');
            var theFirstChild = parentElement.firstChild;
            parentElement.insertBefore(newContainer, theFirstChild);
        }
        else
            document.getElementById('results').appendChild(newContainer);

        var div = document.createElement('div');
        div.setAttribute('class', 'select');
        div.innerHTML = courseDiv;
        document.getElementById(divName).appendChild(div);

        var div1 = document.createElement('div');
        div1.setAttribute('class', 'select');
        div1.innerHTML = assignDiv; 
        document.getElementById(divName).appendChild(div1);

        var div2 = document.createElement('div');
        div2.setAttribute('class', 'select');
        div2.innerHTML = timeStartDiv; 
        document.getElementById(divName).appendChild(div2);

        var div3 = document.createElement('div');
        div3.setAttribute('class', 'select');
        div3.innerHTML = durationDiv; 
        document.getElementById(divName).appendChild(div3);

        var div4 = document.createElement('div');
        div4.setAttribute('class', 'select');
        div4.innerHTML = timeStopDiv; 
        document.getElementById(divName).appendChild(div4);

        var temp = document.getElementById('time1').remove();
        temp = document.getElementById('duration').remove();
        temp = document.getElementById('time2').remove();


        timeStarted = false;
    }
}

// starts and displays timer
function totalTime() {
    var today = new Date();
    date2h = today.getHours();
    date2m = today.getMinutes();
    date2s = today.getSeconds();
    date2m = checkTime(date2m);
    date2s = checkTime(date2s);
    totalHours = date2h - date1h;
    totalMinutes = date2m - date1m;
    totalSeconds = date2s - date1s;

    durationDiv = totalHours + " hours " + totalMinutes + " minutes " + totalSeconds + " seconds ";
    document.getElementById('duration').innerHTML = durationDiv;
    t = setTimeout(totalTime, 500);
}

function createTimeStopDiv () {
    var div = document.createElement('div');
    div.setAttribute('class', 'select');
    div.setAttribute('id', 'time2');

    document.getElementById('container').appendChild(div);
}

function createDiv (divId, divClass, appendTo) {
    var divId = divId;
    var divClass = divClass;
    var appendTo = appendTo;

    var div = document.createElement('div');
    if (divClass != 'none') {
        div.setAttribute('class', 'divClass');
    }
    div.setAttribute('id', 'divId');
    document.getElementById('appendTo').appendChild(div);
}

