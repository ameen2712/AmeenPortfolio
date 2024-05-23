// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll to top
  });
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting the default way

  // Get the values of the email and contact number inputs
  const email = document.getElementById('email').value;
  const contactNumber = document.getElementById('contactNumber').value;

  // Display the values in an alert (for demonstration purposes)
  alert(`Email: ${email}\nContact Number: ${contactNumber}`);
  
  // Here you can also add code to send the data to the server if needed
});

