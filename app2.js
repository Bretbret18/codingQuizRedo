let round = 0;

function quizStart() {
    // Start quiz styles
    $('#start-quiz').css('border', '4px solid darkslategrey');
    $('#start-quiz').css('margin', '20px');
    $('#start-quiz').css('padding', '100px');
    $('#start-quiz').css('textAlign', 'center');
    $('#start-quiz').css('color', 'white');

    // Greeting Styles
    $('#greeting').css('fontSize', '20px');

    // Rules Button
    const rulesBtn = document.querySelector('#rules-btn');
    rulesBtn.className = 'btn btn-info';

    // Rules Button Styles
    $('#rules-btn').css('padding', '40px 70px');
    $('#rules-btn').text('Rules');
    $('#rules-btn').css('color', 'white');
    $('#rules-btn').css('fontSize', '30px');
    $('#rules-btn').css('marginTop', '10px');
    $('#rules-btn').css('borderRadius', '10px');
    $('#rules-btn').css('fontWeight', '900');
    $('#rules-btn').css('border', '4px solid white')

    // Rules Button Event
    $('#rules-btn').on('click', function (e) {
        $('#start-quiz').hide()
        $('#quiz-rules').show()
        quizRules()
    })
}

function quizRules() {
    // Quiz Rules Styles
    $('#quiz-rules').css('border', '4px solid darkslategrey');
    $('#quiz-rules').css('margin', '20px');
    $('#quiz-rules').css('padding', '40px');
    $('#quiz-rules').css('textAlign', 'center');
    $('#quiz-rules').css('color', 'white');
    // Quiz Rules HTML
    $('#quiz-rules').html(`<h2>Rules:</h2>
<ul>
<li class="list-unstyled">This is a coding quiz that
 tests the user on coding related questions</li> 
<li class="list-unstyled">The user will have 75
 seconds to complete the quiz</li>
<li class="list-unstyled">Each wrong answer the user
 chooses will result in 5 seconds being removed from
  the clock</li> 
<li class="list-unstyled">Answer each question correctly
 as quickly as you can and insert your initials at the 
 end of the quiz to see if you have the highest score</li> 
<p>Good Luck!</p>
</ul> <br>
<button id="begin-quiz-btn" 
class="bg bg-info">Start Quiz!</button>`);
    // Begin Quiz Button Styles
    $('#begin-quiz-btn').css('color', 'white');
    $('#begin-quiz-btn').css('fontSize', '30px');
    $('#begin-quiz-btn').css('marginTop', '10px');
    $('#begin-quiz-btn').css('borderRadius', '10px');
    $('#begin-quiz-btn').css('border', '4px solid white')
    $('#begin-quiz-btn').css('fontWeight', '900');
    // Begin Quiz Event
    $('#begin-quiz-btn').on('click', function (e) {
        console.log('start quiz btn');

        $('#quiz-rules').hide()
        questionPage()
    })
}

function questionPage() {
    var questionPage = document.querySelectorAll('.question')
    // Question Div Styles
    $(questionPage).css('border', '4px solid darkslategrey');
    $(questionPage).css('margin', '20px');
    $(questionPage).css('padding', '40px');
    $(questionPage).css('textAlign', 'center');
    $(questionPage).css('color', 'white');
    // Question Div HTML
    $('#question-page').html(`<table class="table">
<td class="active"><h2 id="current-question">
${questionArray[round].question}</h2></td> <br>
    </table>
    <div id="answers-div">
    <button id="answers"class="btn btn-info answer one"><li>
    ${questionArray[round].answers[0].option}
    </li></button><br>
    <button id="answers"class="btn btn-info answer two"><li>
    ${questionArray[round].answers[1].option}
    </li></button><br>
    <button id="answers"class="btn btn-info answer three"><li>
    ${questionArray[round].answers[2].option}
    </li></button><br>
    <button id="answers"class="btn btn-info answer four"><li>
    ${questionArray[round].answers[3].option}
    </li></button>
    </div>`)

    // Answers Styles
    $('#current-question').css('color', 'white')
    $(answers).css('margin-top', '5px');
    $(answers).css('padding', '10px 200px');
    $(answers).css('color', 'white');

    gameFunction()
}

function gameFunction() {
    $('.answer').each(function (i, answerBtn) {
        $(this).on('click', function (e) {
            console.log(answerBtn);
            console.log(round);
            console.log(questionArray[round].question);

            if (questionArray[round].answers[i].isCorrect === true) { 

                round++
                if(round >= 5) {
                    round--
                    console.log('here');
                    $('#question-page').hide()
                    $('#finshed-quiz-page').show()
                    finishedQuizPage()
                }
                console.log(round);
                console.log('next question');
               questionPage()
            }
        })
    })
}

function finishedQuizPage() {
    console.log('finished quiz page');
    $('#finshed-quiz-page').css('border', '4px solid darkslategrey');
    $('#finshed-quiz-page').css('margin', '20px');
    $('#finshed-quiz-page').css('padding', '40px');
    $('#finshed-quiz-page').css('textAlign', 'center');
    $('#finshed-quiz-page').css('color', 'white');
    $('#finshed-quiz-page').html(`You have finished the quiz!`)
}

quizStart()
