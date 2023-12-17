
// verify email using regex
function verifyEmail(email) {
    return email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi);
}

// verify password is at least 8 characters long
function verifyPassword(password) {
    return password.length >= 8;
}

// hints for the login form
const inputs = document.querySelectorAll(".form-control");
inputs.forEach((input) => {
    input.oninput = () => {
        // set a timeout so that the label doesn't change while the user is typing (which is annoying)
        setTimeout(() => {
            const label = document.querySelector(`label[for="${input.id}"]`);
            // validate email
            if (label.id === 'email-label') {
                if (verifyEmail(input.value) || input.value === '') {
                    label.innerHTML = 'Email';
                    label.classList.remove('text-danger'); // stop the label from being scary
                } else {
                    label.innerHTML = 'Email is not valid!';
                    label.classList.add('text-danger'); // make the label scary
                }
            }
            // validate password
            else if (label.id === 'password-label') {
                if (verifyPassword(input.value) || input.value === '') {
                    label.innerHTML = 'Password';
                    label.classList.remove('text-danger'); // stop the label from being scary
                } else {
                    label.innerHTML = 'Password is too short!';
                    label.classList.add('text-danger'); // make the label scary
                }
            }
        }, 500);
    }
});

// show password checkbox drama
const showPassword = document.querySelector('#show-password');
const passwordInput = document.querySelector('.form-control#password');
// uncheck the checkbox by default
showPassword.checked = false;

showPassword.onclick = () => {
    if (showPassword.checked) {
        // unhide the password
        passwordInput.type = 'text';
    } else {
        // hide the password again
        passwordInput.type = 'password';
    }
}