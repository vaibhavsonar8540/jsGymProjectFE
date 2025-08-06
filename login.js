// Handle Signup
const signupForm = document.getElementById('form-2');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect data from the sign-up form
    let fName = document.getElementById('f-name').value;
    let lName = document.getElementById('l-name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pass').value;

    // Retrieve existing users or initialize an empty array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists
    if (users.some(user => user.Email === email)) {
        alert("This email is already registered. Please use a different email.");
        return;
    }

    // Add new user to the array
    users.push({
        FirstName: fName,
        LastName: lName,
        Email: email,
        Password: password
    });

    // Save updated users array to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully! You can now log in.");
    window.location.href = "index.html"; // Redirect to login page
});

// Handle Login
const loginForm = document.getElementById('form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Collect data from the login form
    let email = document.getElementById('email-add').value;
    let password = document.getElementById('password').value;

    // Retrieve users list from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email and password match any user
    let user = users.find(user => user.Email === email && user.Password === password);

    if (user) {
        alert(`Login Successful! Welcome, ${user.FirstName} ${user.LastName}.`);
        window.location.href = "welcome.html"; // Redirect to a welcome page
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
