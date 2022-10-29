// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
}

//All character strings to put into arrays-----------------
var availableUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var availableLowercase = 'abcdefghijklmnopqrstuvwxyz';
var availableNumbers = '0123456789';
var availableSpecial = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~';



// Logic to generate password
function generatePassword() {
  var passwordLength = prompt('What length of password would you like? \nPlease enter a number from 8-128');
  var finalPass = "";
  var contString = "";
  var tryAgain = "Please try again!";

//First length check for password
  if (passwordLength === "" || passwordLength > 128 || passwordLength < 8 || passwordLength === null|| (isNaN(passwordLength))) {
    if (passwordLength === null) {
      return
    }
      else if (passwordLength === "" ) {
    alert('Please enter a password length')
    generatePassword()
    return
    } else if (passwordLength > 128) {
      alert('Selected password length is too long. Please choose a shorter password.')
      generatePassword()
      return
    } else if (passwordLength < 8) {
      alert('Selected password length is too short. Please choose a longer password.');
      generatePassword()
      return
    } else if (isNaN(passwordLength)) {
      alert('Please enter a number only');
      generatePassword()
      return
    }} else {
      if (confirm('Would you like to use uppercase characters?')) {
        contString = contString.concat(availableUppercase)
      }
      if (confirm('What about lowerscase characters?')) {
        contString = contString.concat(availableLowercase)
      }
      if (confirm('Would you like to use numeric characters?')) {
        contString = contString.concat(availableNumbers)
      }
      if (confirm('Lastly, would you like to use special characters?')) {
        contString = contString.concat(availableSpecial)
      }
      if (contString === ""){
        alert('Please select at least one character type.')
        return tryAgain
      }
    }
    
    
    var partPass = "";
    console.log(passwordLength)
    var finalArray = contString.split('');
    console.log(finalArray)

    for ( let i=0; i < passwordLength; i++){
      var random = Math.floor(Math.random() * finalArray.length);
      partPass = finalArray[random];
      finalPass += partPass
    }

  console.log("This is the generated password " + finalPass) 
  password = finalPass
  return finalPass
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)