let sentences = [
  'I did not like the jibberish',
  'So I changed it',
  'I also wanted shorter sentences',
  'Hope that is ok',
  'It is changed now so...'];
let sentencesCounter = 0; //counts ea. sentence
let sentence = sentences[sentencesCounter]; //counts ea. sentence through the sentences
let letterCounter = 0;   //counts ea. letter
let eaLetter = sentence[letterCounter]; //counts ea. letter through the sentence



$('#target-letter').text(eaLetter);
$('#sentence').append(sentence);

$('#keyboard-upper-container').hide();

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
});




//all the other stuff
$(document).keypress(function (e) {
if(sentence.charCodeAt(letterCounter) === e.which){ //The event.which is an inbuilt property in jQuery which is used to return which keyboard key or mouse button was pressed for the event.
  $('#feedback').append('<span class ="glyphicon glyphicon-thumbs-up"></span>')
  $('#yellow-block').css('left', '+=18')
  letterCounter++;
  eaLetter = sentence[letterCounter];
  $('#target-letter').text(eaLetter);

}else{
  $('#feedback').append('<span class ="glyphicon glyphicon-thumbs-down"></span>')
}

  if(letterCounter === sentence.length) { 
    letterCounter = 0;
    $('#yellow-block').css('left', '15px')
    if(sentencesCounter<=sentences.length){ //
      clear();
    sentencesCounter++;
    sentence = sentences[sentencesCounter];
    $('#sentence').append(sentence);
    eaLetter = sentence[letterCounter];
    $('#target-letter').text(eaLetter);
  }
    
    
    
    
    
}

  
})
function clear(){
  $('#sentence').empty();
  $('#target-letter').empty();
  $('#feedback').empty();
}

//let eaLetterCode = eaLetter.charCodeAt();
// letterCounter++;
// $(document).keydown(function (e) {
//   let keyCode = e.key.charCodeAt();
//   if(sentences[letterCounter].charCodeAt() === keyCode){
//   $('#yellow-block').css('left', '15px');}
// })
  
//   let keyCode = e.key.charCodeAt();
//   let idKeyCode = "#" + keyCode;
  
//  if(idKeyCode = eaLetter) {
   
//     $('#yellow-block').css('margin-left', '10px');
    
// }
//   eaLetter++;

// let yellowHighligt = $('$yellow-block').css({
//   'position': 'relative',
//   'margin-left': '10px'
// })

// letterCounter++;
// if (sentences[sentanceCounter].length == letterCounter.length) {
//   sentanceCounter++;
// }
// $(document).keypress(function (e) {
//   if (e.key.charCodeAt() === sentances[letterCounter].charCodeAt()) {
//     $('#yellow-block').css('margin-left', '15px')
//   }
// })





