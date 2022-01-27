//assignment code here
var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var symbols = ["!","@","#","$","%","^","&","*","?"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var generateBtn = document.querySelector("#generate");
var confirmLowercase;
var confirmUppercase;
var confirmNumbers;
var confirmSymbols;

  function confirmCharacters(){
    confirmLowercase = window.confirm("Would you like to include lowercase letters?");
    console.log('confirmLowercase', confirmLowercase)
    confirmUppercase = window.confirm("Would you like to include uppercase letters?");
    console.log('confirmUppercase', confirmUppercase)
    confirmNumbers = window.confirm("Would you like to include numbers?");
    console.log('confirmNumbers', confirmNumbers)
    confirmSymbols = window.confirm("Would you like to include symbols?");
    console.log('confirmSymbols', confirmSymbols)
  }

  function generatePassword(){
    //1. Prompt user for the password criteria
    //  -password length 8 < 128
    var passwordLength = parseInt(prompt("Enter password length. Choose a number between 8-128."))
    console.log('passwordLength',passwordLength)
  if(passwordLength < 8 || passwordLength > 128){
    generatePassword();
  }else{

  confirmCharacters()
      //if confirmLowercase is false and confirmUppercase is false and confirmNumbers and  confirmSymbols are false, then let the user know to choose something
      if(confirmLowercase === false && confirmUppercase === false && confirmNumbers === false && confirmSymbols === false){
       window.alert("Please choose atleast one option.")
        confirmCharacters()
      }else{
        createPassword()
      }
  }
  };

  function createPassword(){
    var possibleOption= []
    if(confirmLowercase === true){
      possibleOption.push(lowercase)
    }
    if(confirmUppercase === true){
      possibleOption.push(uppercase)
    }
    if(confirmNumbers === true){
      possibleOption.push(numbers)
    }
    if(confirmSymbols === true){
      possibleOption.push(symbols)
    }
    console.log('possibleOption', possibleOption)
  } 

  
  
  //2. validate input
  // window.confirm("Password created.");
  //3. generate password

  //4. display the password
    // return "generated password will go here"
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 }
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

createPassword()
console.log("createPassword")