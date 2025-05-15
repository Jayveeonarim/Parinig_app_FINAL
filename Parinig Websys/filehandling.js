document.getElementById('attorneyForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent real submission

    const name = document.getElementById('attorneyName').value.trim();
    const firm = document.getElementById('lawFirm').value.trim();
    const fileInput = document.getElementById('photo');
    const file = fileInput.files[0];
    const result = document.getElementById('uploadResult');

    // Basic text input validation
    if (name === '' || firm === '') {
      result.textContent = 'All fields are required.';
      result.className = 'error';
      return;
    }

    // File validations
    if (!file) {
      result.textContent = 'Please select a photo!';
      result.className = 'error';
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 2 * 1024 * 1024; // 2MB

    if (!allowedTypes.includes(file.type)) {
      result.textContent = 'Only JPEG, PNG, or GIF images allowed!';
      result.className = 'error';
      return;
    }

    if (file.size > maxSize) {
      result.textContent = 'File must be under 2MB!';
      result.className = 'error';
      return;
    }

    
    result.textContent = `Application submitted with file: ${sanitizeFileName(file.name)}`;
    result.className = 'success';
    window.location.href = 'dashboard.html';
    
  });

  function sanitizeFileName(name) {
    return name.replace(/[^a-zA-Z0-9._-]/g, '');
  }