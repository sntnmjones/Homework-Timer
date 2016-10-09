<!DOCTYPE html>
<html>
<head>
    <title>Homework Time Tracker</title>
    <link rel="stylesheet" type="text/css" href="./homework_time_tracker.css">
</head>
<body>
Click "Time Start" to start timer. Click "Time Stop" to stop timer.
<div style="
    display: flex; 
    margin-top: .25%;
    width: 100%;
    ">

    <div class="header"
    style="

        width: 20%;
    ">Class</div>

    <div class="header bordermod"
    style="
        border-right: none;
        width: 20%;    
    ">Instructor</div>

    <div id="time_start" class="header"
    onClick="timeStart()" 
    style="
        width: 20%;    
    ">Time Start</div>
    
    <div id="time_stop" class="header bordermod"
    onClick="timeStop()" 
    style="
        width: 20%;    
    ">Time Stop</div>
    
    <div class="header bordermod"
    style="
        width: 20%;    
    ">Duration</div>

</div>

<div style="
    display: inline-flex; 
    width: 100%;
    margin-top: .25%;
">
    <select class="select">
        <option>Class...</option>
        <option>CSCI211</option>
        <option>MATH217</option>
        <option>MATH121</option>
        <option>CSCI301</option>
        <option>CINS370</option>
    </select>

    <select class="select">
        <option>Instructor...</option>
        <option>Dr. Tyson Henry</option>
        <option>Dr. Adam McGown</option>
        <option>Dr. Adam Meyer</option>
        <option>Dr. Susan Hubbard</option>
        <option>Dr. Jaime Raigoza</option>
    </select>

    <div id="time1" class="select">
        
    </div>

    <div id="time2" class="select">
        
    </div>

    <div id="total" class="select">
        
    </div>    
</div>
<script type="text/javascript" src="./homework_time_tracker.js"></script>
</body>
</html>