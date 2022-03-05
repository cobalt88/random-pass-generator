// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // var generatePassword = ;
  var passwordText = document.querySelector("#password");
  var passwordLength = window.prompt("How long would you like you password to be?")
    if(passwordLength < 129 && passwordLength > 7) {
      window.prompt("Are there any specific character you would prefer to include?")
    } else {
      alert("That is an invalid entry. Select a length between 8 and 128")
    }

  passwordText.value = password;

  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);