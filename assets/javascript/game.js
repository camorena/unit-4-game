$(document).ready(function () {

    // initialize game variables
    var totalWins = 0;
    var totalLosses = 0;
    var totalScore = 0;
    var randomScore = 0;
    var crystal1 = 0;
    var crystal2 = 0;
    var crystal3 = 0;
    var crystal4 = 0;
    var keySound = new Audio('assets/sounds/typewriter-key.wav');
    var winSound = new Audio('assets/sounds/you-win.wav');
    var looseSound = new Audio('assets/sounds/you-lose.wav');

    initGame();

    function initGame() {

        totalScore = 0;

        score(totalScore);

        // calculate random score & display value
        gameScore();

        // Assign random value to each crystal
        crystalValue();

        showInstructions();

    }

    // calculate random score & display value
    function gameScore() {
        randomScore = Math.floor(Math.random() * 120) + 1;
        $("#random-score").text(randomScore);
    }

    // Assign values to crystals
    function crystalValue() {
        //assign a random value to each crystal 
        crystal1 = Math.floor(Math.random() * 12) + 1;
        crystal2 = Math.floor(Math.random() * 12) + 1;
        crystal3 = Math.floor(Math.random() * 12) + 1;
        crystal4 = Math.floor(Math.random() * 12) + 1;
    }

    function showInstructions() {
        $("#message").html("<h2 class='text-center'>Instructions</h2>");
        $("#message").append("<p>You will be given a random number at the start of the game</p>");
        $("#message").append("<p>There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score</p>");
        $("#message").append("<p>You win the game by matching your total score to random number, you lose the game if your total score goes above the random number.</p > ");
        $("#message").append("<p>Each time when the game starts, the game will change the values of each crystal.</p>");
    }


    // calculate total user score & display value
    function score(value) {
        totalScore += value;
        $("#total-score").text(totalScore);
    }

    // Update winner & display information
    function winner() {
        if (totalScore === randomScore) {
            totalWins++;
            $("#total-wins").text(totalWins);
            $("#message").html("<img src='assets/images/you-win.png' class='img-fluid rounded float-left rounded-circle'>");
            winSound.play();
            setTimeout(function(){
                initGame();
              }, 2000);
        }
    };

    // Update losser & display information
    function looser() {
        if (totalScore > randomScore) {
            totalLosses++;
            $("#total-losses").text(totalLosses);
            $("#message").html("<img src='assets/images/game-over.png' class='img-fluid rounded float-left rounded-circle'>");
            looseSound.play();
            setTimeout(function(){
                initGame();
              }, 2000);
        }
    }

    //Game control 

    function game(value) {

        keySound.play();

        //update user total game 
        score(value);

        // update and display winner information
        winner();

        // update and display losser information
        looser();
    }

    $("#crystal1").on("click", function () {
        game(crystal1);
    });

    $("#crystal2").on("click", function () {
        game(crystal2);
    });

    $("#crystal3").on("click", function () {
        game(crystal3);
    });

    $("#crystal4").on("click", function () {
        game(crystal4);
    });

});
