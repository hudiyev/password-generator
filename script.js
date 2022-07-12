// Assignment code here
// Get references to the #generate element'
const characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP1234567890@#$%^&*()_-+=[{]};:>|./?";

let passwordLength = "";
let password = "";

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  passwordLength = prompt("how long do you want the password to be", "0-129");

  // 1.Prompt the user for the password criteria
  // a.Password length 8 < 128
  // b.lowercase,uppercase,numbers,special characters
  // 2.Validate the input
  // 3.Generate password based on criteria

  // 4.display the password to the page

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);

    password += characters.substring(randomNumber, randomNumber + 1);
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
