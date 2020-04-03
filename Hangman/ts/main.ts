const wodrList :any= [
    "zohair",
    "hangman",
    "iphone",
    "game",
    "dog",
    "oilers",
    "edmonton",
];
let guessesLeft: number=0;
const Gameover :any=5;
let word :string="";

// answerArray stores the answer board (starting with all _ and gradually filled in)
let answerArray :any;
 answerArray = [];
function init(){
    // Pick a random word
    word = wodrList[Math.floor(Math.random() * wodrList.length)];
    // Set up the answer array
    answerArray = [];
    for (let i = 0; i < word.length; i++) {
      answerArray[i] = "_";
    }
    document.getElementById("answer").innerHTML= answerArray.join(" ");
  }
  init();
  function guessOne() {
    // Get a guess from the player
    let guess:any
    
     guess = document.getElementById("guess");
     let guessValue = guess.value
    let showThisMessage = "";

  if (guessValue.length !== 1) {
      showThisMessage ="Please enter only a single letter";
  } else {
        // Update the game with the guess
         // an indexer into the array 
        for (let i = 0; i < word.length; i++) {
            if (word[i] === guessValue) {
                answerArray[i] = guessValue;
                showThisMessage = "YES! "+guessValue+" is in the answer";
            }
        }

        // Update the game for remaining unknowns
        let remaining_letters = answerArray.length;
        // recount the remaining letters
        for (let i = 0; i < answerArray.length; i++) {
            if (answerArray[i] !== '_') {
                remaining_letters -= 1;
            }
        }
        // if no remaining letters, hurray, you won
        if (remaining_letters == 0) {
            showThisMessage = "YES! You guessed the word";
            alert( 'you win (:');
        }
        // (otherwise) if we have no message, wrong guess 
        if (showThisMessage === "") {
            showThisMessage = "Sorry, no "+guessValue,guessesLeft++;
        }
        if (guessesLeft > Gameover) {
           
            alert( 'Game Over ):');
        }
        // Update the puzzle
        document.getElementById("answer").innerHTML = answerArray.join(" ");

        // Lend a hand by clearing out their last guess
        let spaceVlaue=guessValue;
        spaceVlaue=document.getElementById("guess");
        spaceVlaue.value="";
  }
  document.getElementById("message").innerHTML = showThisMessage;
}