var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirm-password');

password.addEventListener('input', checkPasswords);
confirmPassword.addEventListener('input', checkPasswords);

function checkPasswords() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.setCustomValidity('Passwords do not match.');
    } else {
        confirmPassword.setCustomValidity('');
    }
}