// Tab switching
const loginTab = document.getElementById('loginTab');
const signupTab = document.getElementById('signupTab');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const successMsg = document.getElementById('successMsg');

loginTab.onclick = () => {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginForm.style.display = '';
    signupForm.style.display = 'none';
    successMsg.style.display = 'none';
};
signupTab.onclick = () => {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupForm.style.display = '';
    loginForm.style.display = 'none';
    successMsg.style.display = 'none';
};

// Show success message after login/signup
loginForm.onsubmit = function(e) {
    e.preventDefault();
    successMsg.textContent = 'Welcome back! You have successfully logged in.';
    successMsg.style.display = 'block';
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
};
signupForm.onsubmit = function(e) {
    e.preventDefault();
    successMsg.textContent = 'Thank you for signing up! Your account has been created.';
    successMsg.style.display = 'block';
    loginForm.style.display = 'none';
    signupForm.style.display = 'none';
};