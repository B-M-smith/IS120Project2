// Get references to the hamburger button and the navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add an event listener to the hamburger button
hamburger.addEventListener('click', () => {
  // Toggle the 'active' class to show or hide the navigation links
  navLinks.classList.toggle('active');
});
