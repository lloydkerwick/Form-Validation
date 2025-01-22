const usernameInput = document.querySelector('.js-username-input');
const emailInput = document.querySelector('.js-email-input');
const passwordInput = document.querySelector('.js-password-input')
const logInButton = document.querySelector('.js-login-button')
const logInResult = document.querySelector('.js-login-result')

usernameInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    emailInput.focus()
  }
})

emailInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    passwordInput.focus()
  }
})

passwordInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    logInButton.click();
  }
})

function isValidUsername(username) {
  return /^[a-zA-Z0-9_-]{6,16}$/.test(username); //regex (regular expression) method to validate
}

function isValidEmail(email) {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email); //regex for email
}

function isValidPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/.test(password);
}

function logInCalculate() {
  logInButton.addEventListener('click', () => {
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    document.querySelector('.js-username-error').style.display = 'none';
    document.querySelector('.js-email-error').style.display = 'none';
    document.querySelector('.js-password-error').style.display = 'none'

    let isValid = true;

    if (!isValidUsername(username)) {
      document.querySelector('.js-username-error').textContent = 'Please enter a valid username';
      document.querySelector('.js-username-error').style.display = 'block'
      
      isValid = false;
    }

    if (!isValidEmail(email)) {
      document.querySelector('.js-email-error').textContent = 'Please enter a valid email';
      document.querySelector('.js-email-error').style.display = 'block'
      isValid = false;
    }

    if (!isValidPassword(password)) {
      document.querySelector('.js-password-error').textContent = 'Please enter a valid password';
      document.querySelector('.js-password-error').style.display = 'block'
      isValid = false;
    }

    if (isValid) {
      logInResult.textContent = "You are successfully logged in";
      logInResult.style.color = 'green'
    } else {
      logInResult.textContent = "Please enter valid inputs to log in";
      logInResult.style.color = 'red';
    }
  }
)}

logInCalculate();





