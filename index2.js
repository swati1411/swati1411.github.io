/**
 * This code is just to set the initial timing, it could be done on the server side without needing any JS
 */
var date = new Date();

var seconds = date.getSeconds() * 6;
var minutes = date.getMinutes() * 6 + seconds/60;
var hours = date.getHours()%12 * 30 + minutes / 15;

document.querySelector(".box.seconds").style.transform = "rotate(" + seconds + "deg)"; 
document.querySelector(".box.minutes").style.transform = "rotate(" + minutes + "deg)"; document.querySelector(".box.hours").style.transform = "rotate(" + hours + "deg)"; 