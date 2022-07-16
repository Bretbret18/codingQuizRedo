var answersBtn = document.querySelectorAll('.answer')
let round = 0;

// Game Object
const game = {
    questionArray: [0, 1, 2, 3, 4],
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
        $('#rules-btn').css('border', '3px solid white')

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
        $('#begin-quiz-btn').css('fontWeight', '900');
        // Begin Quiz Event
        $('#begin-quiz-btn').on('click', function (e) {
            console.log('start quiz btn');
            $('#quiz-rules').hide()
            game.questionDiv()
        })
    },
    questionDiv: function () {
        var questionPage = document.querySelectorAll('#question-page')
        // Question Div Styles
        $(questionPage).css('border', '4px solid darkslategrey');
        $(questionPage).css('margin', '20px');
        $(questionPage).css('padding', '40px');
        $(questionPage).css('textAlign', 'center');
        $(questionPage).css('color', 'white');
        // Question Div HTML
        $('#question-page').html(`<table class="table">
        <td class="active"><h2 id="current-question">
        ${game.questionArray[round].question}</h2></td> <br>
            </table>
            <div id="answers-div">
            <button id="answers"class="btn btn-info answer one"><li>
            ${game.questionArray[round].answers[0].option}
            </li></button><br>
            <button id="answers"class="btn btn-info answer two"><li>
            ${game.questionArray[round].answers[1].option}
            </li></button><br>
            <button id="answers"class="btn btn-info answer three"><li>
            ${game.questionArray[round].answers[2].option}
            </li></button><br>
            <button id="answers"class="btn btn-info answer four"><li>
            ${game.questionArray[round].answers[3].option}
            </li></button>
            </div>`)

            $('#current-question').css('color', 'white')
        $(answers).css('margin-top', '5px');
        $(answers).css('padding', '10px 200px');
        $(answers).css('color', 'white');

        
    },
    gameBegin: function () {
        game.questionDiv()
        $('.answer').each(function (i, answerBtn) {
            $(this).on('click', function (e) {
                console.log(answerBtn);

                console.log(round);
                console.log(game.questionArray[round].question);

                if (game.questionArray[round].answers[i].isCorrect === true) {
                    round++
                    if(round >= 5) {
                    
                        console.log('here');
                        $('#question-page').hide()
                    }
                    console.log(game.questionArray[round].question);
                    console.log(round);
                    console.log('next question');
                   game.questionPage()
                }
            })
        })      
    },
    
}

game.quizStart()














