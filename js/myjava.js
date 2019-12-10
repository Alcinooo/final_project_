var totalQuestions = $(".qa");
let question1= document.querySelector('#one');
let question2= document.querySelector('#two');
let question3= document.querySelector('#three');
let question4= document.querySelector('#four');
let question5= document.querySelector('#five');
let question6= document.querySelector('#six');
let question7= document.querySelector('#seven');
let question8= document.querySelector('#eight');
let question9= document.querySelector('#nine');
let question10= document.querySelector('#ten');

document.querySelector('#points').style.display = 'none';

let currentQuestion = 0

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

        document.querySelector('#points').style.display = 'block';

        let tackle = ["You missed the tackle!", "You made the tackle!"]

        let range;

            if (correct <= 7) {
              range = 0;
            } else {
              range = 1;
            }

        document.querySelector('#points').style.visibility = 'visible';

        document.querySelector('#number_correct').innerHTML = "You got " + correct + " correct";
        document.querySelector('#message').innerHTML = tackle[range];



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
let response4 = document.querySelector('#response4');
let response5 = document.querySelector('#response5');
let response6 = document.querySelector('#response6');
let response7 = document.querySelector('#response7');
let response8 = document.querySelector('#response8');
let response9 = document.querySelector('#response9');
let response10 = document.querySelector('#response10');

let correct = 0;
$next = $('#next');
$next.hide();


let message1 = m1;
let message2 = m1;
let message3 = m1;
let message4 = m1;
let message5 = m1;
let message6 = m1;
let message7 = m1;
let message8 = m1;
let message9 = m1;
let message10 = m1;

function writeResults() {
  response1.textContent = message1;
  response2.textContent = message2;
  response3.textContent = message3;
  response4.textContent = message4;
  response5.textContent = message5;
  response6.textContent = message6;
  response7.textContent = message7;
  response8.textContent = message8;
  response9.textContent = message9;
  response10.textContent = message10;
}


writeResults();


const goButton1 = document.querySelector('#go1');

goButton1.addEventListener('click', check1);

function check1(){

  let question1 = document.quiz.question_1.value;


  if (question1 ==="B") {
    message1 = m3 + " This amount is too low, and you may risk dehydration and added fatigue during game time.";
    $next.show();
    goButton1.style.display = "none";
  } else if (question1 === "C") {
    message1 = m3 + " Too, too much! At that rate, you’d risk bloating. You may even spend game time in the locker room bathrooms.";
    $next.show();
    goButton1.style.display = "none";
  } else if (question1 === "D") {
    message1 = m3 + "This amount is too low, and you may risk dehydration and added fatigue during game time.";
    $next.show();
    goButton1.style.display = "none";
  } else if (question1 ==="A") {
    correct++
    $(".user").animate({"left": "+=2em"}, "slow");
    $(".ball-carrier").animate({"left": "-=2em"}, "slow");
    message1 = m2 + " According to the American Academy of Family physicians, water regulates body temperature and lubricates your joints. If you don’t get enough water, you can end up with muscle cramps, dizziness, or other symptoms.";
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
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message2 = m3 + " If you are only drinking when you are thirsty, you are already dehydrated.";
    $next.show();
    goButton2.style.display = "none";
  } else if (question2 === "C") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message2 = m3 + " Drinking so much water at one time will only cause you to head to the bathroom.";
    $next.show();
    goButton2.style.display = "none";
  } else if (question2 === "D") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message2 = m3;
    $next.show();
    goButton2.style.display = "none";
  } else if (question2 ==="B") {
    correct++
    $(".user").animate({"left": "+=2em"}, "slow");
    $(".ball-carrier").animate({"left": "-=2em"}, "slow");
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
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message3 = m3;
    $next.show();
    goButton3.style.display = "none"
  } else if (question3 === "C") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message3 = m3;
    $next.show();
    goButton3.style.display = "none";
  } else if (question3 === "B") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message3 = m3;
    $next.show();
    goButton3.style.display = "none";
  } else if (question3 ==="D") {
    correct++
    $(".user").animate({"left": "+=2em"}, "slow");
    $(".ball-carrier").animate({"left": "-=2em"}, "slow");
    message3 = m2;
    $next.show();
    goButton3.style.display = "none";
  } else {
    message3 = m4;
  }

  writeResults();

}

const goButton4 = document.querySelector('#go4');

goButton4.addEventListener('click', check4);

function check4(){

  let question4 = document.quiz.question_4.value;


  if (question4 ==="A") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message4 = m3 + " Oh, you bet it does! Sleeping too little affects your memory, mood, coordination, and appetite. How can you make a play if you’re hangry and unbalanced?";
    $next.show();
    goButton4.style.display = "none"
  } else if (question4 === "B") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message4 = m3 + "Sleeping too little affects your memory, mood, coordination, and appetite. How can you make a play if you’re hangry and unbalanced?";
    $next.show();
    goButton4.style.display = "none";
  } else if (question4 === "D") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message4 = m3 + " way too much.  Much like sleeping too little, oversleeping can cause fatigue and drowsiness. It can affect your coordination during the big game!";
    $next.show();
    goButton4.style.display = "none";
  } else if (question4 ==="C") {
    correct++
    $(".user").animate({"left": "+=2em"}, "slow");
    $(".ball-carrier").animate({"left": "-=2em"}, "slow");
    message4 = m2 + " Sleeping this amount is sufficient to help your body heal and maintain proper functions of your vital organs.";
    $next.show();
    goButton4.style.display = "none";
  } else {
    message4 = m4;
  }

  writeResults();

}

const goButton5 = document.querySelector('#go5');

goButton5.addEventListener('click', check5);

function check5(){

  let question5 = document.quiz.question_5.value;


  if (question5 ==="A") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message5 = m3 + " It’s important to keep a sleep schedule that is consistent day to day.";
    $next.show();
    goButton5.style.display = "none"
  } else if (question5 === "B") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message5 = m3 + " Catching up on sleep is a myth. The goal is to maintain a proper circadian rhythm.";
    $next.show();
    goButton5.style.display = "none";
  } else if (question5 === "D") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message5 = m3 + " The LED in your phone can disrupt sleeping habits. If you can’t fall asleep, get out of the room and do something relaxing.";
    $next.show();
    goButton5.style.display = "none";
  } else if (question5 ==="C") {
    correct++
    $(".user").animate({"left": "+=2em"}, "slow");
    $(".ball-carrier").animate({"left": "-=2em"}, "slow");
    message5 = m2 + " Sex helps lowers cortisol (the stress hormone) and releases prolactin, helping you feel relaxed and happy.";
    $next.show();
    goButton5.style.display = "none";
  } else {
    message5 = m4;
  }

  writeResults();

}

const goButton6 = document.querySelector('#go6');

goButton6.addEventListener('click', check6);

function check6(){

  let question6 = document.quiz.question_6.value;


  if (question6 ==="A") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message6 = m3 + " Power can be useful, but if you don’t wrap up, the ball carrier can bounce off you and keep running.";
    $next.show();
    goButton6.style.display = "none"
  } else if (question6 === "B") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message6 = m3 + " Never lead with your head. Doing so can cause head and spinal injury.";
    $next.show();
    goButton6.style.display = "none";
  } else if (question6 === "C") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message6 = m3 + " If you leave your feet, you lose your balance. Your opponent can then drag you across the field.";
    $next.show();
    goButton6.style.display = "none";
  } else if (question6 ==="D") {
    correct++
    $(".user").animate({"left": "+=2em"}, "slow");
    $(".ball-carrier").animate({"left": "-=2em"}, "slow");
    message6 = m2 + " Great form. Good balance, impact, and finish to keep your opponent within your grasp.";
    $next.show();
    goButton6.style.display = "none";
  } else {
    message6 = m4;
  }

  writeResults();

}

const goButton7 = document.querySelector('#go7');

goButton7.addEventListener('click', check7);

function check7(){

  let question7 = document.quiz.question_7.value;


  if (question7 ==="B") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message7 = m3;
    $next.show();
    goButton7.style.display = "none"
  } else if (question7 === "C") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message7 = m3;
    $next.show();
    goButton7.style.display = "none";
  } else if (question7 === "D") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message7 = m3;
    $next.show();
    goButton7.style.display = "none";
  } else if (question7 ==="A") {
    correct++
    $(".user").animate({"left": "+=2em"}, "slow");
    $(".ball-carrier").animate({"left": "-=2em"}, "slow");
    message7 = m2 + "CTE is a degenerative brain disease that forms clumps of Tau proteins that slowly spreads throughout the brain, killing brain cells.";
    $next.show();
    goButton7.style.display = "none";
  } else {
    message7 = m4;
  }

  writeResults();

}

const goButton8 = document.querySelector('#go8');

goButton8.addEventListener('click', check8);

function check8(){

  let question8 = document.quiz.question_8.value;


  if (question8 ==="A") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message8 = m3;
    $next.show();
    goButton8.style.display = "none"
  } else if (question8 === "B") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message8 = m3;
    $next.show();
    goButton8.style.display = "none";
  } else if (question8 === "D") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message8 = m3;
    $next.show();
    goButton8.style.display = "none";
  } else if (question8 ==="C") {
    correct++
    $(".user").animate({"left": "+=2em"}, "slow");
    $(".ball-carrier").animate({"left": "-=2em"}, "slow");
    message8 = m2 + " That is why it’s extremely important to practice sound technique when making tackles. Don’t sacrifice your long-term health for one game.";
    $next.show();
    goButton8.style.display = "none";
  } else {
    message8 = m4;
  }

  writeResults();

}

const goButton9 = document.querySelector('#go9');

goButton9.addEventListener('click', check9);

function check9(){

  let question9 = document.quiz.question_9.value;


  if (question9 ==="B") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message9 = m3 + " When a ball carrier tries to juke you, they will false step in a direction and go the other way. Ball carriers sell the false step with a shoulder and head shimmy.";
    $next.show();
    goButton9.style.display = "none"
  } else if (question9 === "C") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message9 = m3 + " A good ball carrier will be quick enough to see you commit and evade it. You just got juked.";
    $next.show();
    goButton9.style.display = "none";
  } else if (question9 === "D") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message9 = m3 + "  No. Just no.";
    $next.show();
    goButton9.style.display = "none";
  } else if (question9 ==="A") {
    correct++
    $(".user").animate({"left": "+=2em"}, "slow");
    $(".ball-carrier").animate({"left": "-=2em"}, "slow");
    message9 = m2 + " Let him shimmy and dance. Keep your feet moving and attack where he commits. Hips don’t lie.";
    $next.show();
    goButton9.style.display = "none";
  } else {
    message9 = m4;
  }

  writeResults();

}

const goButton10 = document.querySelector('#go10');

goButton10.addEventListener('click', check10);

function check10(){

  let question10 = document.quiz.question_10.value;


  if (question10 ==="A") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message10 = m3;
    $next.show();
    goButton10.style.display = "none"
  } else if (question10 === "C") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message10 = m3;
    $next.show();
    goButton10.style.display = "none";
  } else if (question10 === "D") {
    $(".user").animate({"left": "-=2em"}, "slow");
    $(".ball-carrier").animate({"left": "+=2em"}, "slow");
    message10 = m3;
    $next.show();
    goButton10.style.display = "none";
  } else if (question10 ==="B") {
    correct++
    $(".user").animate({"left": "+=2em"}, "slow");
    $(".ball-carrier").animate({"left": "-=2em"}, "slow");
    message10 = m2 + " Facemasks are usually 15-yard penalties.";
    $next.show();
    goButton10.style.display = "none";
  } else {
    message10 = m4;
  }

  writeResults();

}
