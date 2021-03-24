// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var specialCharacters =["!","@","#","$","%","^","&","~","*"];
var lowerCase = ["a","b","c","d","e","f","g","h","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var Numbers = [1,2,3,4,5,6,7,8,9];
// Write password to the #password input
function writePassword() {
  var password = getOptions();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function getOptions(){
  var length = parseInt(prompt("Type in a length between 8 and 128"))
  console.log(length)
  if(isNaN(length)){
    console.log("This is not a number")
  } else{
    console.log("This is a number")
    if(length >=8 && length <=128){
      var special = confirm("Do you want special characters?")
      console.log(special)
      var lowercase = confirm("Do you want lower case?")
      var uppercase = confirm("Do you want uppercase?")
      var numbers = confirm("Do you want numbers?")
      if(special === false && lowercase === false && uppercase === false && numbers === false){
        alert("Must select at least one option")
      }
      else{return generatePassword(special, lowercase, uppercase, numbers, length)}
      }
  }
}
function generatePassword(special, lowercase, uppercase, numbers, length) {
console.log(special,lowercase,uppercase,numbers,length)
var combination =[]
var displayPassword =""
if(special === true){
combination = combination.concat(specialCharacters)
}
if(lowercase === true){
  combination = combination.concat(lowerCase)
}
if(uppercase === true){
combination = combination.concat(upperCase)
}
if(numbers === true){
  combination = combination.concat(Numbers)
}
for(var i = 0; i <length; i++){
 displayPassword = displayPassword + (combination[(Math.floor(Math.random()*combination.length))])
}
return displayPassword
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
