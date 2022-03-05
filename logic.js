// Assignment Code
// var generateBtn = document.querySelector("#generate");
// console.log(generateBtn)

// var lowerLetters = [
//   "a", "b", "c", "d", "e", "f", "g", "h", "i" , "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
// ];

// var upperLetters = [
//   "A", "B", "C", "D", "E",
// ]

// var numbers= [
//   "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
// ];
// var specialChar = [
//   " ", "!", '"', "#", "$", "%", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "\\", "^", "_", "`", "{", "|", "}", "~"
// ];

const myArrayUpper = Array.from(Array(26)).map((e,i) => i + 65);
const alphabetUpper = myArrayUpper.map((x) => String.fromCharCode(x));

const myArrayLower = Array.from(Array(26)).map((e,i) => i + 97);
const alphabetLower = myArrayLower.map((x) => String.fromCharCode(x));

console.log(upperLetters)
console.log(lowerLetters.length);
console.log(numbers.length);
console.log(specialChar.length);


var passwordLength = window.prompt("How long would you like you password to be?")
  if(passwordLength < 129 && passwordLength > 7) {
    window.prompt("Are there any specific character you would prefer to include?")
  } else {
    alert("That is an invalid entry. Select a length between 8 and 128")
  }

  passwordText.value = password;


function generatePassword() {
  var password = passwordObjectGen();
  console.log(password);
  console.log(password.passLength);
  console.log(criteriaAggregate);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

