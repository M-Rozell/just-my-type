$(document).ready(function () {

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
    let keyCode = e.key.charCodeAt()
    $('#' + keyCode).css('backgroundColor', 'gray');
  })




})

