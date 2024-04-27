// script.js
document.addEventListener('DOMContentLoaded', function() {
    var counterElement = document.getElementById('counter');
    var startValue = 0;
    var endValue = parseInt(counterElement.getAttribute('data-purecounter-end')); // Get the end value from data attribute
    var duration = parseInt(counterElement.getAttribute('data-purecounter-duration')) * 1000; // Convert duration to milliseconds
    var fps = 30; // Frames per second

    var increment = (endValue - startValue) / (duration / 1000 * fps);

    var current = startValue;
    var interval = setInterval(function() {
        current += increment;
        counterElement.textContent = Math.round(current);

        if (current >= endValue) {
            clearInterval(interval);
            counterElement.textContent = endValue;
        }
    }, 1000 / fps);
});
