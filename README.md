# Stopwatch Project

A simple web-based stopwatch built using HTML, CSS, and JavaScript.

## Project Structure

- **14.html**: Contains the structure of the webpage with buttons to start, stop, and reset the stopwatch.
- **14.css**: Provides the styling for the stopwatch, including the layout and button designs.
- **14.js**: Implements the functionality of the stopwatch (start, stop, and reset) using JavaScript.

## Features

- **Start Button**: Begins the stopwatch timer.
- **Stop Button**: Stops the running timer.
- **Reset Button**: Resets the stopwatch to 00:00:00.
- **Display**: Shows the time in HH:MM:SS format.

## How to Use
1. Clone or download the repository.
2. Open the `14.html` file in your browser.
3. Use the buttons to control the stopwatch:
   - **Start**: Starts the stopwatch.
   - **Stop**: Stops the stopwatch at the current time.
   - **Reset**: Resets the time back to 00:00:00.

## Technologies Used

- **HTML**: For the structure of the webpage.
- **CSS**: To style the stopwatch interface and buttons.
- **JavaScript**: For the stopwatch functionality, including the timer logic and updating the display.

## Code Explanation

### HTML (`14.html`)
- Defines the structure of the stopwatch interface.
- Contains the display for time and buttons to start, stop, and reset the stopwatch.

### CSS (`14.css`)
- Centers the stopwatch in the viewport and applies styles to buttons and time display.

### JavaScript (`14.js`)
- **`formatTime(seconds)`**: Formats time into **HH:MM:SS**.
- **`updateDisplay()`**: Updates the display with the formatted time.
- **`start()`**: Starts the stopwatch using `setInterval()` and increments the time every second.
- **`stop()`**: Stops the stopwatch and clears the interval.
- **`reset()`**: Resets the time and updates the display.


## Future Enhancements

- **Lap Time Functionality**: Add a button to record lap times without stopping the main timer.
- **Persistent Timer**: Implement a feature to keep the stopwatch running even after closing the browser (using local storage).
- **Custom Styling**: Allow users to customize the background color and button styles.
- **Sound Alerts**: Add sound alerts when the stopwatch starts, stops, or resets.

## Author

Himani Gaire
