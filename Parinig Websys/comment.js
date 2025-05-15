function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }
  
  function isValidInput(input) {
    const regex = /^[a-zA-Z0-9\s.,!?'"()-]*$/;
    return input.length > 0 && input.length <= 200 && regex.test(input);
  }
  
  function addComment() {
    const input = document.getElementById('commentInput').value.trim();
    const commentsDiv = document.getElementById('comments');
    const errorDiv = document.getElementById('error');
  
    errorDiv.textContent = '';
  
    if (!isValidInput(input)) {
      errorDiv.textContent = 'Invalid input! Use letters, numbers, and basic punctuation (max 200 characters).';
      return;
    }
  
    const safeInput = sanitizeInput(input);
  
    const newComment = document.createElement('div');
    newComment.className = 'comment';
  
    const author = document.createElement('strong');
    author.textContent = 'You';
  
    const time = document.createElement('small');
    time.textContent = new Date().toLocaleString();
  
    const text = document.createElement('p');
    text.innerHTML = safeInput;
  
    newComment.appendChild(author);
    newComment.appendChild(time);
    newComment.appendChild(text);
  
    commentsDiv.appendChild(newComment);
  
    document.getElementById('commentInput').value = '';
  }
  