hoursDiv = document.querySelector(".numbers.hours")
minutesDiv = document.querySelector(".numbers.minutes")
secondsDiv = document.querySelector(".numbers.seconds")

setInterval(function() {
    const date = new Date();
    let getHours = date.getHours();
    let getMinutes = date.getMinutes();
    let getSeconds = date.getSeconds();

    if(getHours < 10) {
        getHours = "0" + getHours;
    }
    if(getMinutes < 10) {
        getMinutes = "0" + getMinutes;
    }
    if(getSeconds < 10) {
        getSeconds = "0" + getSeconds;
    }

    hoursDiv.textContent = getHours;
    minutesDiv.textContent = getMinutes;
    secondsDiv.textContent = getSeconds;
}, 1000);