var totalQuestions = $(".qa");
var question1= document.querySelector('#one');
var question2= document.querySelector('#two');
var question3= document.querySelector('#three');
var questions = [question1, question2, question3]

function getRandomQuest(questions) {
  return Math.floor(Math.random() * Math.floor(questions));
}
// expected output: 0, 1 or 2
//Set the current question to display to 1
var currentQuestion = getRandomQuest(3);

//Store the selector in a variable.
//It is good practice to prefix jQuery selector variables with a $
$questions = $('.qa');



//Hide all the questions
$questions.hide();

//Show the first question
$($questions.get(currentQuestion)).fadeIn();



//attach a click listener to the HTML element with the id of 'next'
$('#next').click(function () {



  $next.hide();
     //fade out the current question,
     //putting a function inside of fadeOut calls that function
     //immediately after fadeOut is completed,
     //this is for a smoother transition animation
     $($questions.get(currentQuestion)).fadeOut(function () {

        //increment the current question by one
        currentQuestion = currentQuestion + 1;

        //if there are no more questions do stuff
        if (currentQuestion === totalQuestions) {

            var result = sum_values()

            //do stuff with the result
            alert(result);

        } else {

            //otherwise show the next question
            $($questions.get(currentQuestion)).fadeIn();

        }
    });

});


let m1 = "Choose a response";
let m2 = "Correct!"
let m3 = "Incorrect."
let m4 = "No skipping!"
let response1 = document.querySelector('#response1');
let response2 = document.querySelector('#response2');
let response3 = document.querySelector('#response3');
let correct = 0;
$next = $('#next');
$next.hide();


let message1 = m1;
let message2 = m1;
let message3 = m1;

function writeResults() {
  response1.textContent = message1;
  response2.textContent = message2;
  response3.textContent = message3;
}


writeResults();


const goButton1 = document.querySelector('#go1');

goButton1.addEventListener('click', check1);

function check1(){

  let question1 = document.quiz.question_1.value;


  if (question1 ==="B") {
    message1 = m3;
    $next.show();
    goButton1.style.display = "none";
  } else if (question1 === "C") {
    message1 = m3;
    $next.show();
    goButton1.style.display = "none";
  } else if (question1 === "D") {
    message1 = m3;
    $next.show();
    goButton1.style.display = "none";
  } else if (question1 ==="A") {
    correct++
    message1 = m2;
    $next.show();
    goButton1.style.display = "none";
  } else {
    message1 = m4;
  }

  writeResults();

}

const goButton2 = document.querySelector('#go2');

goButton2.addEventListener('click', check2);

function check2(){

  let question2 = document.quiz.question_2.value;


  if (question2 ==="A") {
    message2 = m3;
    $next.show();
    goButton2.style.display = "none";
  } else if (question2 === "C") {
    message2 = m3;
    $next.show();
    goButton2.style.display = "none";
  } else if (question2 === "D") {
    message2 = m3;
    $next.show();
    goButton2.style.display = "none";
  } else if (question2 ==="B") {
    correct++
    message2 = m2;
    $next.show();
    goButton2.style.display = "none";
  } else {
    message2 = m4;
  }

  writeResults();

}

const goButton3 = document.querySelector('#go3');

goButton3.addEventListener('click', check3);

function check3(){

  let question3 = document.quiz.question_3.value;


  if (question3 ==="A") {
    message3 = m3;
    $next.show();
    goButton3.style.display = "none"
  } else if (question3 === "C") {
    message3 = m3;
    $next.show();
    goButton3.style.display = "none";
  } else if (question3 === "B") {
    message3 = m3;
    $next.show();
    goButton3.style.display = "none";
  } else if (question3 ==="D") {
    correct++
    message3 = m2;
    $next.show();
    goButton3.style.display = "none";
  } else {
    message3 = m4;
  }

  writeResults();

}
