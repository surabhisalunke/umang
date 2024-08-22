// Predefined users
const users = {
    "umang.raichura": "nagindaskhandwala",
    "admin": "admin"
};

const names = {
    "umang.raichura": "Umang Raichura",
    "admin": "Administrator"
};

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users[username] && users[username] === password) {
        document.getElementById('message').textContent = `Welcome, ${names[username]}!`;
        document.getElementById('loginForm').style.display = 'none';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password';
    }
});
