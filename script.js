// Assignment code here
// Get references to the #generate element'
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var symbols = "@#$%^&*()_-+=[{]};:>|./?";
var characters = [];
let passwordLength = "";
let password = "";

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  passwordLength = prompt("how long do you want the password to be", "8-128");
  var allChoices = "";
  // 1.Prompt the user for the password criteria
  // a.Password length 8 < 128
  // b.lowercase,uppercase,numbers,special characters
  // 2.Validate the input
  // 3.Generate password based on criteria

  // 4.display the password to the page
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("invalid choice");
    generatePassword();
  }

  var lowerCaseChoice = confirm("Do you want lowercase letters?");

  if (lowerCaseChoice == true) {
    var randomLower = Math.floor(Math.random() * passwordLength);
    console.log(randomLower);

    allChoices += lowerCase;
  }
  var upperCaseChoice = confirm("Do you want uppercase letters?");

  if (upperCaseChoice == true) {
    var randomUpper = Math.floor(Math.random() * passwordLength);
    allChoices += upperCase;
  }

  var numberChoice = confirm("Do you want numbers?");
  if (numberChoice == true) {
    var randomNumber = Math.floor(Math.random() * passwordLength);
    allChoices += numbers;
  }

  var symbolChoice = confirm("Do you want symbols?");
  if (symbolChoice == true) {
    var randomSymbol = Math.floor(Math.random() * passwordLength);
    allChoices += symbols;
  }

  console.log(allChoices);

  // password += characters.push(randomLower);

  //Repeat uppercase,numbers,symbols

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * passwordLength);

    password += allChoices.substring(randomNumber, randomNumber + 1);
  }
}

// Write password to the #password input
function writePassword() {
  var pw = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // document.getElementById('password').value = pw;

  console.log(pw);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
