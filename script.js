/*Add your JavaScript here*/

var earthScore=0; //store earth score
var fantasyScore=0; // store fantasy world score

var questionCount=0; //store no of answers clicked on
var result=document.getElementById("result");
var restart=document.getElementById("restart");

var q1a1=document.getElementById("q1a1");
var q1a2=document.getElementById("q1a2");

var q2a1=document.getElementById("q2a1");
var q2a2=document.getElementById("q2a2");

var q3a1=document.getElementById("q3a1");
var q3a2=document.getElementById("q3a2");

//event listeners
q1a1.addEventListener("click", earth);
q1a2.addEventListener("click", fantasy);

q2a1.addEventListener("click", earth);
q2a2.addEventListener("click", fantasy);

q3a1.addEventListener("click", earth);
q3a2.addEventListener("click", fantasy);

restart.addEventListener("click",restartQuiz);

function earth(){
  earthScore+= 1;
  questionCount+= 1;
  console.log("questionCount = " + questionCount + "earthScore = " + earthScore);

  if (questionCount==3) {
  console.log("The quiz is done!");
  updateResult();
}
}

function fantasy(){
  fantasyScore+= 1;
  questionCount+=1;
  console.log("questionCount = " + questionCount + "fantasyScore = " + fantasyScore)

  if (questionCount==3) {
  console.log("The quiz is done!");
  updateResult();
  
} 
}

if (earthScore>= 2){
  console.log("You would live on Earth!");
} else if (fantasyScore>=2){
  console.log("You would live in a Fantasy World!");
}

function updateResult(){
  
  if (earthScore>= 2){
    result.innerHTML="You would live on Earth!";
  console.log("You would live on Earth!");
} else if (fantasyScore>=2){
    result.innerHTML="You would live in a Fantasy World!";
  console.log("You would live in a Fantasy World!");
}
  
}

function restartQuiz() {
  result.innerHTML = "You are a...";
  questionCount = 0;
  earthScore = 0;
  fantasyScore = 0;
  enableQuestions();
}