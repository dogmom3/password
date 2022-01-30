//assignment code here
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","^","&","*","?"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var passwordLength = []
var generateBtn = document.querySelector("#generate");

  function generatePassword(){
    //1. Prompt user for the password criteria
    //  -password length 8 < 128
  var passwordLength = parseInt(prompt("Enter password length. Choose a number between 8-128."))
  if (passwordLength > 8 || passwordLength < 128) {
        //    -lowercase, uppercase, numbers,symbols
      window.prompt("Would you like to include lowercase letters?");
      window.prompt("Would you like to include uppercase letters?");
      window.prompt("Would you like to include numbers?");
      window.prompt("Would you like to include symbols?");
   } else if (passwordLength < 8 || passwordLength > 128);
      window.prompt("You must choose between 8 and 128");
  };
  
  
  //2. validate input
  // window.confirm("Password created.");
  //3. generate password

  //4. display the password
    // return "generated password will go here"
  

// Write password to the #password input
function returnPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 }
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

generateBtn.addEventListener("click", function () {
  let password = generatePassword();


document.querySelector("#password").innerHTML = password;
  console.log(password);
});