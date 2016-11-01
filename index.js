var num = 7;

var randomInt = Math.floor(Math.random() * 10) + 1;
var userInput = Number(prompt("Enter an integer between 1 and 10")); 

while (userInput != randomInt) {
  
  if (userInput > randomInt){
    userInput = Number(prompt("Go lower!"));
  } else if (userInput < randomInt){
    userInput = Number(prompt("Go higher!"));
  }

};

if(userInput === randomInt){
  alert("Congrats!")
}

