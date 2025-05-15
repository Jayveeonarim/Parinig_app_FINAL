const users = {}; 

function signup() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");
  const confirmPassword = document.getElementById("confirm_password").value.trim();

  
  if  (/\d/.test(username))  {  
    message.style.color = "red";
    message.textContent = "names have no number lol!";
    return false;
  }


  if (!/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]{8,}$/.test(password)) {
    message.style.color = "red";
    message.textContent = "Password must be at least 8 characters and can contain special characters!";
    return false;
  }
  
if (password !== confirmPassword) {
  console.warn("Mismatch:", password, confirmPassword);
  message.style.color = "red";
  message.textContent = "Passwords do not match!";
  return false;
}


  if (users[username]) {
    message.style.color = "red";
    message.textContent = "Username already exists. Please choose a different one.";
    return false;
  } else {
    users[username] = password;
    message.style.color = "green";
    message.textContent = "Signup successful! You can now log in.";
    
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1500);
  }

  return false; 
}
