// Show popup on page load
window.onload = function () {
  document.getElementById('popup').style.display = 'flex';
};

// Close popup when button clicked
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
