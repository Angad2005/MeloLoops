const loginBtn = document.querySelector("#login");
const registerBtn = document.querySelector("#register");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");


loginBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "#21264D";
    registerBtn.style.backgroundColor = "rgba(255,255,255,0.2)";

    loginForm.style.left = "50%";
    registerForm.style.left = "-50%";

    loginForm.style.opacity = 1;
    registerForm.style.opacity = 0;

    document.querySelector(".col1").style.borderRadius = "0 30% 20% 0"
})
registerBtn.addEventListener('click', () => {
    loginBtn.style.backgroundColor = "rgba(255,255,255,0.2)";
    registerBtn.style.backgroundColor = "#21264D";

    loginForm.style.left = "150%";
    registerForm.style.left = "50%";

    loginForm.style.opacity = 0;
    registerForm.style.opacity = 1;

    document.querySelector(".col1").style.borderRadius = "0 20% 30% 0"
})

document.getElementById('signInButton').addEventListener('click', function() {
    // Get the values from the input fields
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Check if the entered username and password match the specified values
    if (username === 'Ayush@gmail.com' && password === '12345') {
        // Redirect to Playlist.html
        window.location.href = 'Playlist.html';
    } else {
        // Optionally, you can alert the user if the credentials are incorrect
        alert('Invalid username or password');
    }
});