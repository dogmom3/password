// Assignment code here
const numberRange = document.getElementById
('numberRange')
const numberInput = document.getElementById
('numberInput')
const form = document.getElementById('passwordGenerator')


numberInput.addEventListener('input', syncCharacterAmount)
numberRange.addEventListener('input', syncCharacterAmount)

form.addEventListener('submit', e => {
  e.preventDefault()
  const password = generatePassword(characterAmount, includeUppercase, includeLowercase, includeNumbers, includeSymbols)
})

function syncCharacterAmount(e) {
  const value = e.target.value
  numberInput.value = value
  numberRange.value = value
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
