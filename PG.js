// characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  "."
];

//  numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//  lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

//  uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Variable to store length of password from user input
  var passwordLength = parseInt(
    prompt("How many characters would you like your password to contain?")
    );

  //Complete your function here...
  
  // Conditional statement to check if password length is a number. Prompts end if this evaluates false
  if ( isNaN(passwordLength) === true ) {
      alert("Password length must contain at least one number.");
    return
 }
  // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
  if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  if (passwordLength > 128) {
    alert("Password length must less than 129 characters");
    return;
  }

  var hasSpecialCharacters = confirm("Would you like your password to contain special characters?")

  var hasUpperCasedCharacters = confirm("Would you like your password to contain upper cased characters?");

  var hasLowerCasedCharacters = confirm("Would you like your password to contain lower cased characters?");

  var hasNumericCharacters = confirm("Would you like your password to contain numeric characters?");
if (hasNumericCharacters === false && hasSpecialCharacters === false && hasUpperCasedCharacters === false && hasLowerCasedCharacters === false) {
    alert("Must contain at least one character type")
    return
}
   // Object to store user input
   var passwordOptions = {
    length: passwordLength,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };
  // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
  // Conditional statement to check if user does not include any types of characters.
  return passwordOptions;
}
// Function for getting a random element from an array
//Complete your function here...
function getrandomarray(xarray) {
var randomnumber = Math.floor(Math.random() * xarray.length)
var randomarray = xarray[randomnumber]
return randomarray
}
// Function to generate password with user input
function generatePassword() {
    var options = getPasswordOptions();
    var result = [];
    var optioncombos = [];
    var forsureoption = [];

  //Complete your function here...
if (options.hasSpecialCharacters){
    forsureoption.push(getrandomarray(specialCharacters))
    optioncombos = optioncombos.concat(specialCharacters)
}
if (options.hasLowerCasedCharacters){
  forsureoption.push(getrandomarray(lowerCasedCharacters))
  optioncombos = optioncombos.concat(lowerCasedCharacters)
}
if (options.hasUpperCasedCharacters){
  forsureoption.push(getrandomarray(upperCasedCharacters))
  optioncombos = optioncombos.concat(upperCasedCharacters)
}
if (options.hasNumericCharacters){
  forsureoption.push(getrandomarray(numericCharacters))
  optioncombos = optioncombos.concat(numericCharacters)
}

for (i = 0; i < options.length; i++) {
  var randomoptions = getrandomarray(optioncombos);
  result.push(randomoptions)
}
for (i = 0; i < forsureoption.length; i++) {
    result[i] = forsureoption[i];
}
return result.join('')
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
