async function login(event) {
  event.preventDefault(); // Prevent form from reloading the page

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const message = document.getElementById('message');

  // Validate inputs
  const isValidUsername = /^[a-zA-Z0-9]{3,50}$/.test(username);
  if (!isValidUsername || password.length < 6) {
    message.textContent = 'Username (3-50 alphanumeric) and password (min 6 chars) required!';
    message.style.color = 'red';
    return false;
  }

  message.textContent = 'Authenticating...';
  message.style.color = 'black';

  try {
    const response = await fakeServerLogin(username, password);
    message.textContent = response.message;
    message.style.color = response.success ? 'green' : 'red';

    if (response.success) {
      // Redirect after short delay
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 1000);
    }
  } catch (error) {
    message.textContent = 'Login error. Try again.';
    message.style.color = 'red';
  }

  return false;
}

// Simulated secure server-side check
function fakeServerLogin(username, password) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (username === 'admin' && password === 'SecurePass123!') {
        resolve({ success: true, message: 'Login successful!' });
      } else {
        resolve({ success: false, message: 'Invalid credentials!' });
      }
    }, 500);
  });
}
