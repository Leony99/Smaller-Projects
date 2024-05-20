const handHours = document.querySelector(".hours");
const handMinutes = document.querySelector(".minutes");
const handSeconds = document.querySelector(".seconds");

setInterval(function(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const secondsPercent = seconds / 60;
    const minutesPercent = (secondsPercent + minutes) / 60;
    const hoursPercent = (minutesPercent + hours) / 12;

    handHours.style.setProperty("--x", hoursPercent * 360);
    handMinutes.style.setProperty("--x", minutesPercent * 360);
    handSeconds.style.setProperty("--x", secondsPercent * 360);
}, 1000);