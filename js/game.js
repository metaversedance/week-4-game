// specifications:

//    * There will be four crystals displayed as buttons on the page.

//    * The player will be shown a random number at the start of the game.

//    * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

//      * Your game will hide this amount until the player clicks a crystal.
//      * When they do click one, update the player's score counter.

//    * The player wins if their total score matches the random number from the beginning of the game.

//    * The player loses if their score goes above the random number.

//    * The game restarts whenever the player wins or loses.

//      * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

//    * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

// ##### Option 1 Game design notes

// * The random number shown at the start of the game should be between 19 - 120.

// * Each crystal should have a random hidden value between 1 - 12.

//definition:
//numCeiling - number user needs to keep their score under
//userScore - the score of the player, which goes up by the value of each crystal clicked
//
// requirements:

//- random number between 19-120 should be assigned to numCeiling at beginning of game
//- four crystals should be generated
//-  each crystal should have a random value between 1 - 12 as value attribute
//- each time a crystal is clicked, the corresponding crystal value should be added to userScore
//-if userScore === numCeiling user wins
//-if userScore > numCeiling user loses
//if user wins or user loses, game resets



  var util = {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    getRandomIntInclusive: function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
   }


   //- random number between 19-120 should be assigned to numToMatch at beginning of game
  	var numCeiling = null;
  	var userScore = 0;
    var userWins = 0;
    var userLoss = 0;

  	function resetGame() {
   		numCeiling = util.getRandomIntInclusive(19,120);
   		userScore = 0;
		
		//-  each crystal should have a random value between 1 - 12 as value attribute
   		$(".crystal-1").val(util.getRandomIntInclusive(1,12));
   		$(".crystal-2").val(util.getRandomIntInclusive(1,12));
   		$(".crystal-3").val(util.getRandomIntInclusive(1,12));
   		$(".crystal-4").val(util.getRandomIntInclusive(1,12));
      $("#value-to-match").html("<h1>" + "match: " + numCeiling + "</h1>")
      $("#overall-score").html("wins: " + userWins + " losses: " + userLoss)


  	}
  // <h1 id="game-result"></h1>
  // <h1 id="value-to-match"></h1>
  // <h1 id= "wins-and-loses"></h1>

  	function updateGame(crystalVal) {
  		//each time a crystal is clicked, the corresponding crystal value should be added to userScore
  		
  		userScore+=crystalVal;
      
      //if userScore > numCeiling user loses

      if (userScore > numCeiling) {
          alert("you lose")
          userLoss++;
          resetGame();
      } 
      //if userScore === numCeiling user wins
      if (userScore === numCeiling) {

        alert("you win")
        userWins++;
        resetGame()
      }

      $("#user-score").html("<h1>" + "score: " + userScore + "</h1>");
  	}

  	function init() {
  		resetGame();

  		$(".crystal").on("click", function(){
  			if ( !($(this).hasClass("crystal")) ) return;
  			var crystalVal = parseInt($(this).val());
  			updateGame(crystalVal)
  		})

  	}

  	init()


