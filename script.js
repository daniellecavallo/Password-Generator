// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword(){
    var finalpassword = ""
    var passwordsource = ""
    var lowercase = "abcdefghijklmnopqrstuvwxyz"
    var uppercase  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numbers = "0123456789"
    var symbols = "!@#$%^&*?/"
    var passwordlength = prompt("Choose character limit 8-120")
    if (passwordlength >= 8 && passwordlength <=120) {
    var asklowercase = confirm("lowercase")
    var askuppercase = confirm("uppercase")
    var asknumber = confirm("uppernumbers")
    var asksymbols = confirm("uppersymbols")
    if (asklowercase){
        passwordsource += lowercase

    }
    if (askuppercase){
        passwordsource += uppercase
        
    }
    if (asknumber){
        passwordsource += numbers
        
    }
    if (asksymbols){
        passwordsource += symbols
        
    }
    for (i = 0; i < passwordlength; i++) {
        finalpassword += passwordsource.charAt(Math.floor(Math.random ()*passwordsource.length))
    }
        return finalpassword
    } else {
        alert("INVALID CHARACTER LIMIT!")
        return
    }

}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
