//taking input
var readlinesync=require('readline-sync');
//initial score
var score=0;
//function for taking answer of question
function play(question,answer)
  {
  var username=readlinesync.question("what is your name? ");
    console.log("welcome "+username);
    var userAge=readlinesync.question(question);
    if(userAge===answer)
    {
      console.log("you are right!");
      score=score+1;
    }
    else{
      console.log("you are wrong!");
      score=score-1;
    }
   
    console.log(score);
  }
play("Are you older than 25? ","yes");
console.log("what kind of food's do you like?");
var foodItems=[];
var size=1;
for(var i=0;i<size;i++)
  {
    foodItems[i]=prompt("Enter array elements: "+i);
  }
    console.log(foodItems);
// console.log("do you like superheros? ")

//superman objects
var superman={
  name:"shivani",
  costume:"red"
}
var batman={
  name:"anusha",
  costume:"blue"
}
//array
var superheros=[superman,batman];
//function for checking correct answer
function game(question,answer)
  {
   var userVal=readlinesync.question(question);
    if(userVal===answer)
    {
      console.log("you  are already a superhero!");
      
    }
    else{
    console.log("you are normal human!")
    }
      }
game("which superhero do you like: ","superman");

game("which superhero do you like the most: ","batman");

    
  

