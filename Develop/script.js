// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'
var uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numberString = '1234567890'
var specialCharacterString = '!@#$%^&*()?'

function generatePassword() {
    //prompts
    var passwordLength =  prompt('Select a password length (8-128)');
    if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128){
        alert("Length must be 8-128 characters");
        return generatePassword();
      }
    var specialchars = confirm('Do you want special characters?');
    var lowercase = confirm("Do you want lowercase chararcters?");
    var uppercase = confirm("Do you want uppercase chararcters?");
    var numbers = confirm('Do you want numbers?')

    //if no characters chosen
    if (uppercase != true && lowercase != true && numbers != true && specialchars!= true){
        alert("You must select at least one character type!");
        return generatePassword();
      }
    
      passwordLength = parseInt(passwordLength);



    var validCharacters = '';
    var mustHave = '';

    if(specialchars) {
        validCharacters += specialCharacterString;
        mustHave += specialCharacterString.charAt(Math.floor(Math.random() * specialCharacterString.length));
    }

    if(lowercase) {
        validCharacters += lowercaseLetters
        mustHave += lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length));
    }

    if(uppercase) {
        validCharacters += uppercaseLetters
        mustHave += uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length))
    }

    if(numbers) {
        validCharacters += numberString
        mustHave += numberString.charAt(Math.floor(Math.random() * numberString.length))
    }

    var password = '';

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * validCharacters.length)
        password += validCharacters.charAt(randomNumber)
    }

    for (var i= 0; i < mustHave.length; i++) {
        password[i] = mustHave[i];
        
    }


  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);