
let clock = document.getElementById("clock");
let alarmTime = document.getElementById("alarm-time");
let alarmButton = document.getElementById("set-alarm");
let stopAlarm = document.getElementById("stop-alarm");
let alarmSound = document.getElementById("alarm-sound");
let alarmInterval;

// Function to update the clock every second
function updateTime() {
    let date = new Date();
    let time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',second: '2-digit' });;
    clock.innerText = time;
}

// Set interval to update the clock every second
setInterval(updateTime, 1000);

// Function to set the alarm
alarmButton.addEventListener("click", function() {
    let alarm = new Date();
    let alarmHours = alarmTime.value.split(":")[0];
    let alarmMinutes = alarmTime.value.split(":")[1];
    alarm.setHours(alarmHours);
    alarm.setMinutes(alarmMinutes);
    alarm.setSeconds(0);
    
    let timeUntilAlarm = alarm.getTime() - new Date().getTime();
    if (timeUntilAlarm >= 0) {
        alarmInterval = setTimeout(function() {
            alarmSound.play();
        }, 6000000);
    } else {
        alert("Time's Up.");
    }
});

// Function to stop the alarm
stopAlarm.addEventListener("click", function() {
    clearTimeout(alarmInterval);
    alarmSound.pause();
    alarmSound.currentTime = 0;
});
