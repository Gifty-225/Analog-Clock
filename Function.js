const hoursHand = document.getElementById('hours-hand');
const minutesHand = document.getElementById('minutes-hand');
const secondsHand = document.getElementById('seconds-hand');

function updateTime() {
    const currentTime = new Date();

    const currentHours = currentTime.getHours();
    const currentMinutes = currentTime.getMinutes();
    const currentSeconds = currentTime.getSeconds();

    const hoursDegree = convertHoursToDegree(currentHours, currentMinutes);
    const minutesDegree = convert60sToDegree(currentMinutes);
    const secondsDegree = convert60sToDegree(currentSeconds);

    hoursHand.style.setProperty('transform', `rotate(${hoursDegree}deg)`);
    minutesHand.style.setProperty('transform', `rotate(${minutesDegree}deg)`);
    secondsHand.style.setProperty('transform', `rotate(${secondsDegree}deg)`);
}

function convertHoursToDegree(hours, minutes) {
    // Convert hours to 12-hour format
    hours = hours % 12;
    // Calculate degrees considering minutes
    const degree = (360 / 12) * (hours + minutes / 60);
    return degree;
}

function convert60sToDegree(value) {
    return (360 / 60) * value;
}

// Initial call to set the correct time immediately
updateTime();

// Update every second
setInterval(updateTime, 1000);
