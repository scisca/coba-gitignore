// Function to display a welcome message
function showWelcomeMessage() {
    alert('Selamat datang di halaman sederhana!');
}

// Function to change the color of the text
function changeTextColor() {
    var textElement = document.getElementById('welcomeText');
    textElement.style.color = textElement.style.color === 'blue' ? 'black' : 'blue';
}

// Add event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('colorButton');
    button.addEventListener('click', changeTextColor);
});

// Call the welcome message function when the page loads
window.onload = showWelcomeMessage;
