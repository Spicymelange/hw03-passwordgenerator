// Fetch tags and assign to variables
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var divEl = document.querySelector(".card-body")


// Add event listener to generate button
generateBtn.addEventListener("click", function(event){
  if(event.target.matches("button")){//main program runs here
    typePrompt();
    lengthPrompt();
    createArrayOfGens();
    createPassword();
    console.log(password);
    passwordText.textContent = password;
  }
})
//Intialize variables
  var ifLower = false;
  var ifUpper = false;
  var ifNumber = false;
  var ifSymbol = false;
  var userLength = 0;
  var arrayOfGens = [];
  var password = "";

  function typePrompt() {
    do {//while at least one type is not used, keep prompting for a type
      ifLower = window.confirm("Do you want to use lower case letters? (a-z)");

      ifUpper = window.confirm("Do you want to use upper case letters? (A-Z)");

      ifNumber = window.confirm("Do you want to use numbers? (0-9)");

      ifSymbol = window.confirm("Do you want to use symbols? ('(){}[]!@#$%^&*-_=+?/\|~<> .')");
    
      if (ifLower === false && ifUpper === false && ifNumber === false && ifSymbol === false) {
      alert("You must use some characters! Please validate at least one type.");
      }
    } while (ifLower === false && ifUpper === false && ifNumber === false && ifSymbol === false);
  }  

  function lengthPrompt() {
    do{//while length is < 8 or > 128 keep prompting user
      userLength = prompt("How long do you want your password to be? Enter a number between 8-128.", "8");

      if (userLength < 8 || userLength > 128) {
      alert("Your password length must between 8 and 128 characters.");
      }
    } while (userLength < 8 || userLength > 128);
  }    
  

function genLower() {
  var lowerLett = (String.fromCharCode(Math.floor(Math.random() * 26) + 97));
  //.fromCharCode holds a range of characters, math.floor will give us a whole number,.random * 26 allows us to choose 0-26 characters (length of alphabet), and "+97" because lower case runs from #97-122
 return lowerLett;
}
 
function genUpper(){
  var upperLett = (String.fromCharCode(Math.floor(Math.random() * 26) + 65));
  //Uppercase range is 65-90
  return upperLett;
} 

function genNum(){
  var num = (String.fromCharCode(Math.floor(Math.random() * 10) + 48));
  //number range is 48-57
  return num;
} 

function genSym(){
  var symbols = '(){}[]!@#$%^&*-_=+?/\|~<> .'
  //Random char from Symbol string
var symbol = symbols[Math.floor(Math.random() * symbols.length)] 
  return symbol;
} 

function createArrayOfGens (){
  if (ifLower){
    arrayOfGens.push(genLower);
  }
  if (ifUpper){
    arrayOfGens.push(genUpper);
  }
  if (ifNumber){
    arrayOfGens.push(genNum);
  }
  if (ifSymbol){
    arrayOfGens.push(genSym);
  }
}
//I would like to implement a feature that resets the variables on each button press
//Reset variables on Generate button press
// function resetSettings(){
//     ifLower = false;
//     ifUpper = false;
//     ifNumber = false;
//     ifSymbol = false;
//     userLength = 0;
//     arrayOfGens = [];
//     password = "";
// }

//non-random set to get each type in every generation(4 char long)
function createPassword(){
  for(let i = 0; i < arrayOfGens.length; i++){
    password += arrayOfGens[i]();
    console.log(password);
  }
  //update password to achieve length required
  for (let x = 0; x < (userLength - arrayOfGens.length); x++){
    password += arrayOfGens[(Math.floor(Math.random() * arrayOfGens.length))]();
    console.log(password);
  }
  //split and shuffle
  password = password.split("");
  for (var y = (password.length-1); y > 0; y--) {
    var j = Math.floor(Math.random()) * userLength;
    var temp = password[y];
    [password[y], password[j]] = [password[j], password[y]];    
  }
  //join
  password = password.join("");
}