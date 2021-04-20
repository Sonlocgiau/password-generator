// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  
}
// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);
 var length = [""];
 var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
 "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "s", "y", "z"];
 var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", 
 "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "()", "_", "+", "<", ":", ">", "?"];
 var pass = [{lowerCase}, {upperCase}, {numbers}, {symbols}];
 var  generatePassword = function(pass,length) {
  var  password = window.prompt ("enter your password:");
  if (password !=null)
   return password;
}
 var len = pass.length;
generatePassword = len();
var index = Math.floor(Math.random() * len);
var i;
for (i = 0; i < len; i++) {
  password += len;
}
var generatePassword = pass[index];

if (password = !lowerCase && !upperCase && !numbers && !symbols){
password = 0;
  window.alert("");
} else if (
  ( password === "lowerCase" && "!upperCase" && "!numbers" && "symbols"));
  {
    password =[""];
  window.alert(" at lease one number, and one upperCase ");
  } 
  var password = window.confirm("password successful");

