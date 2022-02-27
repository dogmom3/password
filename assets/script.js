//assignment code here
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var passwordLength = []
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var selectedCharacterTypes = []
  var passwordLength = parseInt(prompt("Enter password length. Choose a number between 8-128."))
  if (passwordLength >= 8 && passwordLength <= 128) {

    var includeLowercase = window.confirm("Would you like to include lowercase letters?");
    if (includeLowercase) {
      console.log(selectedCharacterTypes)
      selectedCharacterTypes = selectedCharacterTypes.concat(lowercase);
    }
    var includeUppercase = window.confirm("Would you like to include uppercase letters?");
    if (includeUppercase) {
      var selectedCharacterTypes = selectedCharacterTypes.concat(uppercase);
    }
    var includeNumbers = window.confirm("Would you like to include numbers?");
    if (includeNumbers) {
      var selectedCharacterTypes = selectedCharacterTypes.concat(numbers);
    }
    var includeSymbols = window.confirm("Would you like to include symbols?");
    if (includeSymbols) {
      var selectedCharacterTypes = selectedCharacterTypes.concat(symbols);
    }
  } else {
    window.prompt("You must choose between 8 and 128");
  }

  var returnedPassword = []
  for (let i = 0; i < passwordLength; i++) {
    var randomCharacter = selectedCharacterTypes[Math.floor(Math.random() *
      selectedCharacterTypes.length)]
    returnedPassword.push(randomCharacter)
  }
  return returnedPassword.join('')
}

generateBtn.addEventListener("click", function () {
  let password = generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
});