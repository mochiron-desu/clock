var hour = document.querySelector("#hh")
var min = document.querySelector("#mm")
var sec = document.querySelector("#ss")
var fulldate = document.querySelector("#full-date")
var ampn = document.querySelector("#ampm")

document.body.onload = function () {
    try {
        setInterval(updateClock, 1000)
    }
    catch (err) {
        console.log(err)
    }
}
function updateClock() {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var curtime = new Date();
    fulldate.innerHTML = curtime.toLocaleString("en-IN", options)
    hour.innerHTML = String(curtime.getHours()).padStart(2, '0') + ":";
    min.innerHTML = String(curtime.getMinutes()).padStart(2, '0') + ":";
    sec.innerHTML = String(curtime.getSeconds()).padStart(2, '0');
    if (parseInt(hour.innerHTML) >= 12) {
        ampn.innerHTML = " PM"
    }
    else if (parseInt(hour.innerHTML) < 12) {
        ampn.innerHTML = " AM"
    }
}

document.querySelector("#color1").onclick = function () {
    document.body.style.backgroundColor = "#211b23"
    document.querySelector("#content-container").style.borderColor = "antiquewhite"
    document.querySelector("#hh").style.color = "antiquewhite"
    document.querySelector("#mm").style.color = "antiquewhite"
    document.querySelector("#ss").style.color = "antiquewhite"
    ampn.style.color = "antiquewhite"
    document.querySelector("#button-container span").style.color = "antiquewhite"
}
document.querySelector("#color2").onclick = function () {
    document.body.style.backgroundColor = "#252D33"
    document.querySelector("#content-container").style.borderColor = "#F1EDBA"
    document.querySelector("#hh").style.color = "#F1EDBA"
    document.querySelector("#mm").style.color = "#F1EDBA"
    document.querySelector("#ss").style.color = "#F1EDBA"
    ampn.style.color = "#F1EDBA"
    document.querySelector("#button-container span").style.color = "#F1EDBA"
}
document.querySelector("#color3").onclick = function () {
    document.body.style.backgroundColor = "#BCDBD2"
    document.querySelector("#content-container").style.borderColor = "#17568A"
    document.querySelector("#hh").style.color = "#17568A"
    document.querySelector("#mm").style.color = "#17568A"
    document.querySelector("#ss").style.color = "#17568A"
    ampn.style.color = "#17568A"
    document.querySelector("#button-container span").style.color = "#17568A"
}

//test