// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//All Split character strings and put into arrays-----------------
var availableUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var availableLowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var availableNumbers = '0123456789'.split('');
var availableSpecial = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'.split('');







// Logic to generate password
function generatePassword() {
  var passwordLength = prompt('What length of password would you like? \nPlease enter a number from 8-128');
  var finalString = "";

  
//First length check for password
  if (passwordLength === "" || passwordLength > 128 || passwordLength < 8 || (isNaN(passwordLength))) {
    if (passwordLength === "" ) {
    alert('Please enter a password length')
    generatePassword()
    }  else if (passwordLength > 128) {
      alert('Selected password length is too long. Please choose a shorter password.')
      generatePassword()
    } else if (passwordLength < 8) {
      alert('Selected password length is too short. Please choose a longer password.');
      generatePassword()
    } else if (isNaN(passwordLength)) {
      alert('Please enter a number only');
      generatePassword()
    }
    } else {
      if (var passwordUppercase = confirm('Would you like to use uppercase characters?')) {

      }
      if (var passwordLowercase = confirm('Would you like to use lowerscase characters?')) {
        
      }
      if (var passwordNumeric = confirm('Would you like to use numeric characters?')) {
        
      }
      if (var passworddSpecial = confirm('Lastly, would you like to use special characters?')) {
        
      }
      
      
      
  }
  
}





// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)