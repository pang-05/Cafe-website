function toggleMobileMenu() {
  document.getElementById("navLinks").classList.toggle("active");
  document.getElementById("headerRight").classList.toggle("active");
}

// ======= Go to Top Button =======
document.getElementById('goToTop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
