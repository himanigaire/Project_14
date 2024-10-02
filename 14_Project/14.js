let seconds = 0;
let interval = null;

// Format time in HH:MM:SS
function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// Update the display with formatted time
function updateDisplay() {
    document.getElementById('display').innerText = formatTime(seconds);
}

// Start the stopwatch
function start() {
    if (interval) {
        return; // If the stopwatch is already running, do nothing
    }
    interval = setInterval(function timeset() {
        seconds++;
        updateDisplay();
    }, 1000);    
    // sets the time interval to one second and updates it i.e we write here in milliseconds.
}

// Stop the stopwatch
function stop() {
    clearInterval(interval);
    interval = null; // Clears the interval
}

// Reset the stopwatch
function reset() {
    stop(); // Stop the stopwatch first
    seconds = 0; // Reset seconds to zero
    updateDisplay(); // Update the display to 00:00:00
}