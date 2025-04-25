document.getElementById('adminLoginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Basic hardcoded check (replace with backend auth logic)
    if (username === 'admin' && password === 'mudra2025') {
      window.location.href = 'registrations.html'; // Replace with actual route or fetch from server
    } else {
      document.getElementById('loginError').textContent = 'Invalid username or password';
    }
  });
  