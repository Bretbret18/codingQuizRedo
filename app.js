// Game Object
const game = {
    // * Start Quiz
    gameStart: function () {
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

        // Rules Button Function
        $('#rules-btn').on('click', function (e) {
            $('#start-quiz').hide()
            $('#quiz-rules').show()
            game.quizRules()
        })
    },
    quizRules: function() {
        // Quiz Rules Styles
        $('#quiz-rules').css('border', '4px solid darkslategrey');
        $('#quiz-rules').css('margin', '20px');
        $('#quiz-rules').css('padding', '40px');
        $('#quiz-rules').css('textAlign', 'center');
        $('#quiz-rules').css('color', 'white');
        
        $('#quiz-rules').html(`<h2>Rules:</h2>
        <ul>
        <li>1</li> 
        <li>2</li>
        <li>3</li> 
        <li>4</li> 
        </ul> <br>
        <button id="begin-quiz-btn" class="bg bg-info">Start Quiz!</button>`);
        $('#begin-quiz-btn').css('color', 'white');
        $('#begin-quiz-btn').css('fontSize', '30px');
        $('#begin-quiz-btn').css('marginTop', '10px');
        $('#begin-quiz-btn').css('borderRadius', '10px');
        $('#begin-quiz-btn').css('fontWeight', '900');

        $('#begin-quiz-btn').on('click', function(e) {
            console.log('start quiz btn');
        })

    }
}

game.gameStart()









