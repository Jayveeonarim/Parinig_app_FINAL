
    

  function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");

    if (email === 'jayveemirano09@gmail.com' && password === 'jayvee@123') {
      message.style.color = "green";
      message.textContent = "Login successful! Welcome, " + username + ".";
      window.location.href = "dashboard.html";
    } else {
      message.style.color = "red";
      message.textContent = "Invalid username or password.";
    }
    return false; 
  }