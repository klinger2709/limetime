

window.setInterval(function () {
    var dt = new Date();
    var time = dt.getDay() + "." + dt.getMonth() + "." + dt.getYear() + "   " + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    $("#actualTime").html(dt.toLocaleString())
}, 1000);
$(document).ready(function () {
    $("#toggleTimer").click(function () {
        toggleColor();
        logWork();
        working = !working;
    });
});

var i = 1;
var working = false;
var startTime;
var stopTime;
var toggleColor = function () {
    if (!working) {
        $("#toggleTimer").removeClass("btn-primary");
        $("#toggleTimer").addClass("btn-danger");
        $("#buttonIcon").removeClass("glyphicon-play");
        $("#buttonIcon").addClass("glyphicon-stop");
    } else {
        $("#toggleTimer").removeClass("btn-danger");
        $("#toggleTimer").addClass("btn-primary");
        $("#buttonIcon").removeClass("glyphicon-stop");
        $("#buttonIcon").addClass("glyphicon-play");
    }
}

var logWork = function () {
    if (!working) {
        startTime = new Date();
    } else {
        stopTime = new Date();
        var workDuration = stopTime - startTime;
        var sec = Math.round(workDuration / 1000);
        var min = Math.round(sec / 60);
        sec = sec % 60;
        var h = Math.round(min / 60);
        min = min % 60;
        $(".easyui-datagrid").append(
                "<tr><td>" + startTime.toLocaleDateString() +"</td><td>" + startTime.toLocaleTimeString() + "</td><td>"+ stopTime.toLocaleTimeString() +"</td><td>"+ n(h) + ":" + n(min) + ":" + n(sec) + "</td></tr>");
    }
}

function n(n) {
    return n > 9 ? "" + n : "0" + n;
}
