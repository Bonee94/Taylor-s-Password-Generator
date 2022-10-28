// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var passwordLength = prompt('What length of password would you like? \nPlease enter a number from 8-128');
  var passwordUppercase = confirm('Would you like to use uppercase characters?');
  var passwordLowercase = confirm('Would you like to use lowerscase characters?');
  var passwordNumeric = confirm('Would you like to use numeric characters?');
  var passworddSpecial = confirm('Lastly, would you like to use special characters?');

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
