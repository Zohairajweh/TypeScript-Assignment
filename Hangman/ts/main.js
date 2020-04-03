var wodrList = [
    "zohair",
    "hangman",
    "iphone",
    "game",
    "dog",
    "oilers",
    "edmonton",
];
var guessesLeft = 0;
var Gameover = 5;
var word = "";
var answerArray;
answerArray = [];
function init() {
    word = wodrList[Math.floor(Math.random() * wodrList.length)];
    answerArray = [];
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }
    document.getElementById("answer").innerHTML = answerArray.join(" ");
}
init();
function guessOne() {
    var guess;
    guess = document.getElementById("guess");
    var guessValue = guess.value;
    var showThisMessage = "";
    if (guessValue.length !== 1) {
        showThisMessage = "Please enter only a single letter";
    }
    else {
        for (var i = 0; i < word.length; i++) {
            if (word[i] === guessValue) {
                answerArray[i] = guessValue;
                showThisMessage = "YES! " + guessValue + " is in the answer";
            }
        }
        var remaining_letters = answerArray.length;
        for (var i = 0; i < answerArray.length; i++) {
            if (answerArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }
        if (remaining_letters == 0) {
            showThisMessage = "YES! You guessed the word";
            alert('you win (:');
        }
        if (showThisMessage === "") {
            showThisMessage = "Sorry, no " + guessValue, guessesLeft++;
        }
        if (guessesLeft > Gameover) {
            alert('Game Over ):');
        }
        document.getElementById("answer").innerHTML = answerArray.join(" ");
        var spaceVlaue = guessValue;
        spaceVlaue = document.getElementById("guess");
        spaceVlaue.value = "";
    }
    document.getElementById("message").innerHTML = showThisMessage;
}
//# sourceMappingURL=main.js.map