let sentences = [
  'I did not like the jibberish',
  'So I changed it',
  'I also wanted shorter sentences',
  'Hope that is ok',
  'It is changed now so...'];
let sentencesCounter = 0; //counts ea. sentence
let sentence = sentences[sentencesCounter]; //ea. individual sentence
let letterCounter = 0;   //counts ea. letter
let eaLetter = sentence[letterCounter]; //counts ea. letter through the sentence
let numberOfWords = 24;
let numberOfMistakes = 0;
var myVar = setInterval(myTimer, 1000);

//clock
function myTimer() {
  var d = new Date();
  var t = d.toLocaleTimeString();
  $("#timeClock").html(t);
}

//timestamp of first keypress
var dt = new Date();
$(document).one("keypress", function () {
  var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
  $('#stopWatch').append(time);
})

$('#target-letter').text(eaLetter); //1st sentence target letters
$('#sentence').append(sentence); //1st sentence at top of screen
$('#keyboard-upper-container').hide(); //hide uppercase-keyboard on open

//shift keyboard function
$(document).keydown(function (e) {
  if (e.which === 16) {
    $("#keyboard-lower-container").hide();
    $('#keyboard-upper-container').show();
  }
});

$(document).keyup(function (e) {
  if (e.which === 16) {
    $("#keyboard-lower-container").show();
    $('#keyboard-upper-container').hide();
  }
});

//highlighting keypress in document
$(document).keypress(function (e) {
  let keyCode = e.key.charCodeAt();
  let idKeyCode = "#" + keyCode;
  $(idKeyCode).addClass('highlight');
});

$(document).keyup(function (e) {
  let keyCode = e.key.charCodeAt();
  let idKeyCode = "#" + keyCode;
  $(idKeyCode).removeClass('highlight');
})


//all the other stuff
$(document).keypress(function (e) {


  if (sentence.charCodeAt(letterCounter) === e.which) { //The event.which is an inbuilt property in jQuery which is used to return which keyboard key or mouse button was pressed for the event.
    $('#feedback').append('<span class ="glyphicon glyphicon-thumbs-up"></span>')

    $('#yellow-block').css('left', '+=17.4')
    letterCounter++;
    eaLetter = sentence[letterCounter];
    $('#target-letter').text(eaLetter);

  } else {
    $('#feedback').append('<span class ="glyphicon glyphicon-thumbs-down"></span>')
    console.log(numberOfMistakes); //mistakes
  }

  if (letterCounter === sentence.length) { //where the sentence changes
    letterCounter = 0;
    $('#yellow-block').css('left', '15px')

    if (sentencesCounter != 4) {
      clear();
      sentencesCounter++;
      sentence = sentences[sentencesCounter];
      $('#sentence').append(sentence);
      eaLetter = sentence[letterCounter];
      $('#target-letter').text(eaLetter);

    } else if (sentencesCounter = 4) {
      var lt = new Date(); //time stamp for finished
      var timeTwo = lt.getHours() + ":" + lt.getMinutes() + ":" + lt.getSeconds();
      $('#yellow-block').remove();
      clear();

      $('#stopWatchTwo').append(timeTwo);
      let $btn = $('<button class = "btn">Play Again?</button>');
      $btn.insertAfter('#target-letter');
      $('#feedback').text('You Win!!');
      let minutes = dt - lt;
      //Josh said not to worry about the accuracy of this. it does not work correctly
      $('#target-letter').append("Your WPM!", + numberOfWords / minutes - 2 * numberOfMistakes);
      $(".btn").click(function () {
        location.reload();
      });
    
    }



  }



})

function clear() {
  $('#sentence').empty();
  $('#target-letter').empty();
  $('#feedback').empty();
}


// $(document).one("keypress", function () {
//   if(sentencesCounter=4){
// //     var lt = new Date();
//        var timeTwo = lt.getHours() + ":" + lt.getMinutes() + ":" + lt.getSeconds();
//        $('stopWatchTwo').append(timeTwo);
// })





// $(document).return(function () {
// if(sentencesCounter>=5){
//   let $btn = $('<button>Play Again?</button>');
//   $btn.addClass = 'btnReplay';
//   $($btn).insertAfter('#target-letter');
//   }
// })


// $('#stopWatch').keypress( function (){
//   setInterval(function() {
//     $('.Timer').text(Math.round((new Date - start) / 1000, 0) + " Seconds");;
// })
// })



