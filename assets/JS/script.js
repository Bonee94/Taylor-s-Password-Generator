// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Logic to generate password
function generatePassword() {
  var passwordLength = prompt('What length of password would you like? \nPlease enter a number from 8-128');
  var invalid = ('Selection was invalid');
  var noSelect = ('No selection was made');

  
//First length check for password
  if (passwordLength === "") {
    alert('Please enter a password length')
    passwordLength = prompt('Please enter a number between 8-128');
    }  else if (passwordLength > 128) {
      alert('Selected password length is too long. Please choose a shorter password.')
    passwordLength = prompt('What length of password would you like? \nPlease enter a number between 8-128');
    } else if (passwordLength < 8) {
      alert('Selected password length is too short. Please choose a longer password.');
    passwordLength = prompt('What length of password would you like? \nPlease enter a number between 8-128'); 
    } else if (isNaN(passwordLength)) {
      alert('Please enter a number only');
      passwordLength = prompt('What length of password would you like? \nPlease enter a number between 8-128');
    }
    
// Second length check for password and will return invalid
    if (passwordLength === "") {
      return noSelect
    }  else if (passwordLength > 128) {
      return invalid
    } else if (passwordLength < 8) {
      return invalid 
    } else if (isNaN(passwordLength)) {
      return invalid
    }
  

  var passwordUppercase = confirm('Would you like to use uppercase characters?');
  var passwordLowercase = confirm('Would you like to use lowerscase characters?');
  var passwordNumeric = confirm('Would you like to use numeric characters?');
  var passworddSpecial = confirm('Lastly, would you like to use special characters?');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)