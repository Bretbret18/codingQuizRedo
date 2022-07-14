let round = 0;

// Game Object
const game = {
    round: [0, 1, 2, 3, 4],
    questionPageArray: [$('#question-page-one'), $('#question-page-two'), $('#question-page-three'), $('#question-page-four'), $('#question-page-five')],
    questionArray: [1, 2, 3, 4, 5],
    // * Start Quiz
    quizStart: function () {   
        // Start Quiz Div Styles
        $('#start-quiz').css('border', '4px solid darkslategrey');
        $('#start-quiz').css('margin', '20px');
        $('#start-quiz').css('padding', '100px');
        $('#start-quiz').css('textAlign', 'center');
        $('#start-quiz').css('color', 'white');

        // Greeting Styles
        $('#greeting').css('fontSize', '20px');

        // Rules Button Styles
        $('#rules-btn').css('padding', '40px 70px');
        $('#rules-btn').text('Rules');
        $('#rules-btn').css('color', 'white');
        $('#rules-btn').css('fontSize', '30px');
        $('#rules-btn').css('marginTop', '10px');
        $('#rules-btn').css('borderRadius', '10px');
        $('#rules-btn').css('fontWeight', '900');

        const rulesBtn = document.querySelector('#rules-btn');
        rulesBtn.className = 'btn btn-info';
        rulesBtn.style.border = '3px solid white';

        // Rules Button Event
        $('#rules-btn').on('click', function (e) {
            $('#start-quiz').hide()
            $('#quiz-rules').show()
            game.quizRules()
        })
    },
    quizRules: function () {
        // Quiz Rules Styles
        $('#quiz-rules').css('border', '4px solid darkslategrey');
        $('#quiz-rules').css('margin', '20px');
        $('#quiz-rules').css('padding', '40px');
        $('#quiz-rules').css('textAlign', 'center');
        $('#quiz-rules').css('color', 'white');
        // Quiz Rules HTML
        $('#quiz-rules').html(`<h2>Rules:</h2>
        <ul>
        <li class="list-unstyled">This is a coding quiz that tests the user on coding related questions</li> 
        <li class="list-unstyled">The user will have 75 seconds to complete the quiz</li>
        <li class="list-unstyled">Each wrong answer the user chooses will result in 5 seconds being removed from the clock</li> 
        <li class="list-unstyled">Answer each question correctly as quickly as you can and insert your initials at the end of the quiz to see if you have the highest score</li> 
        <p>Good Luck!</p>
        </ul> <br>
        <button id="begin-quiz-btn" class="bg bg-info">Start Quiz!</button>`);
        // Begin Quiz Button Styles
        $('#begin-quiz-btn').css('color', 'white');
        $('#begin-quiz-btn').css('fontSize', '30px');
        $('#begin-quiz-btn').css('marginTop', '10px');
        $('#begin-quiz-btn').css('borderRadius', '10px');
        $('#begin-quiz-btn').css('fontWeight', '900');
        // Begin Quiz Event
        $('#begin-quiz-btn').on('click', function (e) {
            console.log('start quiz btn');
            $('#quiz-rules').hide()
            $('#question-page-one').show()
            game.gameBegin()
        })
    },
    gameBegin: function () {
        // Question One Div Styles
        $('#question-page-one').css('border', '4px solid darkslategrey');
        $('#question-page-one').css('margin', '20px');
        $('#question-page-one').css('padding', '40px');
        $('#question-page-one').css('textAlign', 'center');
        $('#question-page-one').css('color', 'white');
        // Question One Question and Answers Styles
        $('#answer-1').css('margin-top', '15px')

        // Question One Div HTML
        $('#question-page-one').html(`<table class="table">
  <td id="question-one" class="active"><h2 id="question">${questionArray[0].question[0]}</h2></td> <br>
      </table>
      <div id="answers-div">
      <button id="answers"class="btn btn-info answer one"><li>${questionArray[game.round[round]].answers[0].option}</li></button><br>
      <button id="answers"class="btn btn-info answer two"><li>${questionArray[game.round[round]].answers[1].option}</li></button><br>
      <button id="answers"class="btn btn-info answer three"><li>${questionArray[game.round[round]].answers[2].option}</li></button><br>
      <button id="answers"class="btn btn-info answer four"><li>${questionArray[game.round[round]].answers[3].option}</li></button>
      </div>`)
        // Question 1 Styles
        $('#question').css('color', 'white')
        //  const answers = document.querySelectorAll('.answer');
        $('.answer').each(function (i, answerBtn) {
            console.log(i);
            console.log(answerBtn);
            $(this).on('click', function (e) {
                let question = questionArray[round].question
                let answer = questionArray[round].answers[i].isCorrect
                console.log(answer);
                console.log(question);
                console.log(e.currentTarget.className);
                if(answer === true){
                   
                    round = round+1
                    game.round[round]
                    console.log(game.round[round]);
                    console.log(game.questionPageArray[round]);
                    $('#question-page-one').hide()
                    $('#question-page-two').show()
                    
                }
            })
        })

        $(answers).css('margin-top', '5px');
        $(answers).css('padding', '10px 200px');
        $(answers).css('color', 'white');
    },
    roundIteration: function() {

    },

}

game.quizStart()











