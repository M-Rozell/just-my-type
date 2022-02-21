let sentences = [
  'I did not like the jibberish',
  'So I changed it',
  'I also wanted shorter sentances',
  'Hope that is ok',
  'It is changed now so...'];
let sentanceCounter = 0;
let letterCounter = 0;

$('#keyboard-upper-container').hide();

$(document).keydown(function (e) {
  if (e.which === 16) {
    $("#keyboard-lower-container").hide();
    $('#keyboard-upper-container').show();
  }
})

$(document).keyup(function (e) {
  if (e.which === 16) {
    $("#keyboard-lower-container").show();
    $('#keyboard-upper-container').hide();
  }
})

$(document).keypress(function (e) {
  let keyCode = e.key.charCodeAt();
  $('#' + keyCode).addClass('highlight')
})

$(document).keyup(function (e) {
  let keyCode = e.key.charCodeAt();
  $('#' + keyCode).removeClass('highlight');
});


$('#sentence').append(sentences[sentanceCounter]);



// letterCounter++;
// if (sentences[sentanceCounter].length == letterCounter.length) {
//   sentanceCounter++;
// }
// $(document).keypress(function (e) {
//   if (e.key.charCodeAt() === sentances[letterCounter].charCodeAt()) {
//     $('#yellow-block').css('margin-left', '15px')
//   }
// })





