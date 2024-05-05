document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startBtn').addEventListener('click', startTimer);
});

let countdown;

function startTimer() {
    const hours = parseInt(document.getElementById('hoursInput').value) || 0;
    const minutes = parseInt(document.getElementById('minutesInput').value) || 0;
    const seconds = parseInt(document.getElementById('secondsInput').value) || 0;
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0 || isNaN(totalSeconds)) {
        alert('Please enter a valid time.');
        return;
    }

    displayTimeLeft(totalSeconds);

    countdown = setInterval(() => {
        totalSeconds--;

        if (totalSeconds < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').textContent = 'Time is up!';
            return;
        }

        displayTimeLeft(totalSeconds);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const display = ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')};
    document.getElementById('countdown').textContent = display;
}
