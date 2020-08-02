var array = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];



var started = true;
var level = 0;




$(document).keydown(function() {setTimeout(function(){if (started) {
  $("#level-title").text("level " + level);
  nextSequence();

  started = false;
}

},600)

});

$(".btn").click(function() {

  var userChosenColor = this.id
  userClickedPattern.push("" + userChosenColor);
  animatePress(userChosenColor)
  playSound(userChosenColor)


  checkAnswer(userClickedPattern.length - 1);

})

function checkAnswer(currentLevel) {


  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {

    playSound("wrong")
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, perss any key to restat");
    setTimeout(function() {
      $("body").removeClass("game-over");
    }, 200);



startOver();
  }

}





function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

}





function nextSequence() {
  userClickedPattern=[];
  var randomnumber = Math.round((Math.random() * 3));

  var randomChosenColor = array[randomnumber];
  level++;
  $("h1").html("level " + level)

  gamePattern.push(randomChosenColor);

  var idrandomChosenColor = "#" + randomChosenColor;

  $(idrandomChosenColor).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);


}



function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed")
  setTimeout(function() {
    $("." + currentColor).removeClass("pressed")
  }, 100)
}
function startOver() {
  level = 0;
  gamePattern = [];
  started = true;
}
