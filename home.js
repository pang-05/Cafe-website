// ======= Bestseller Carousel =======
const track = document.querySelector('.carousel-track'); 
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function moveCarousel(index) {
  const items = document.querySelectorAll('.carousel-item');
  const total = items.length;

  // Adjust the array order visually
  const offset = (index - currentIndex + total) % total;
  for (let i = 0; i < offset; i++) {
    track.appendChild(track.firstElementChild);
  }

  // Reset transform
  track.style.transition = 'none';
  track.style.transform = 'translateX(0)';
  void track.offsetWidth; // Force reflow
  track.style.transition = 'transform 0.4s ease-in-out';

  // Reset dot states
  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');

  currentIndex = index;
}

// click event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    moveCarousel(index);
  });
});

// ======= FAQ Dropdown ========

function showAnswer() {
  const select = document.getElementById('faqSelect');
  const answerDiv = document.getElementById('faqAnswer');
  const value = select.value;

  let answer = '';
  if (value === '1') answer = 'Yes! We offer oat, soy, and almond milk options.';
  if (value === '2') answer = 'We’re open from 8 AM – 10 PM every day, including weekends!';
  if (value === '3') answer = 'Absolutely. We offer event bookings for birthdays, meetups, and more.';

  answerDiv.textContent = answer;
}