// Assignment Code
var generateBtn = document.querySelector("#generate");
// console.log(generateBtn)

const myArrayUpper = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetUpper = myArrayUpper.map((x) => String.fromCharCode(x));

const myArrayLower = Array.from(Array(26)).map((e, i) => i + 97);
const alphabetLower = myArrayLower.map((x) => String.fromCharCode(x));

const myArrayNumeric = Array.from(Array(10)).map((e, i) => i + 48);
const numericArray = myArrayNumeric.map((x) => String.fromCharCode(x));

const myArraySpecial = Array.from(Array(15)).map((e, i) => i + 33);
const specCharArray = myArraySpecial.map((x) => String.fromCharCode(x));

function generatePassword() {
  var results = "";
  var numberOfCharacters = window.prompt(
    "How long would you like your password to be?"
  );
  var charQty = parseInt(numberOfCharacters);

  if (charQty > 7 && charQty < 129) {
    var lowerCase = window.confirm(
      "Would you like to include lower case letters?"
    );

    var upperCase = window.confirm(
      "Would you like to include upper case letters?"
    );

    var numeric = window.confirm("Include numbers?");

    var specChar = window.confirm("Special Characters?");
  } else {
    window.alert("That is an invalid entry. Select a length between 8 and 128");
    return generatePassword();
  }

  var pool = [];

  if (upperCase == true) pool.push(...alphabetUpper);

  if (lowerCase == true) pool.push(...alphabetLower);

  if (numeric == true) pool.push(...numericArray);

  if (specChar == true) pool.push(...specCharArray);

  if (lowerCase || upperCase || numeric || specChar) {
    for (var i = 0; i < charQty; i++) {
      results += pool[Math.floor(Math.random() * pool.length)];
    }
  } else {
    window.alert(
      "A minimum of one variable must be selected to generate a password."
    );
    return generatePassword();
  }
  return results;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
