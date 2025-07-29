document.addEventListener("DOMContentLoaded", function () {
  // -- Contact Form Handling --
  const contactForm = document.getElementById("mainContentForm");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

  // Value Check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{7,15}$/;

    if (!email || !phone || !name || !message) {
      alert("Please fill in all fields.");
    } else if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
    } else if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number (digits only, 7–15 characters).");
    } else {
      alert("Thank you! Your message has been received.");
      contactForm.reset();
    }
  });

  // -- Newsletter Subscription Handling --
  const newsletterButton = document.querySelector(".newsletter button");
  const newsletterEmail = document.querySelector(".newsletter input[type='email']");

  newsletterButton.addEventListener("click", function (e) {
    e.preventDefault();

    const emailValue = newsletterEmail.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValue) {
      alert("Please enter your email to subscribe.");
    } else if (!emailPattern.test(emailValue)) {
      alert("Please enter a valid email address.");
    } else {
      alert("Thank you for subscribing to our newsletter!");
      newsletterEmail.value = "";
    }
  });
});
