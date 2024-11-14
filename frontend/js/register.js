const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const emailValue = email.value;
  const passwordValue = password.value;
  const usernameValue = username.value;

  // Create the payload
  const registerData = {
    username: usernameValue,
    email: emailValue,
    password: passwordValue,
  };

  fetch('http://localhost:7000/api/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(registerData),
    credentials: 'include',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Registration failed');
    })
    .then((data) => {
      console.log('Registration successful:', data);
      alert('Registration successful');
      window.location.href = 'login.html';
    })
    .catch((error) => {
      console.error('Error:', error);
      alert('There was an error registering you in.');
    });
});
