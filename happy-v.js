$(document).ready(function() {
  var x = 0,
      y = 0;
  var words = ["I", "love", "you"];
  var reds = ["#630800", "#690800", "#6E0800", "#730500", "#770500", "#810500", "#850100", "#890800",
              "#8D0500", "#910400", "#950900", "#990800", "#AD0800", "#B20900"];

  $('.box').click(function() {
    if ( $(this).hasClass('empty') ) {
      $(this).addClass('full').removeClass('empty');
      $(this).html(words[x%words.length]);
      x++;
      $(this).css('background-color', reds[y%reds.length]);
      y++;
    }
    else {
      $(this).html(' ');
      $(this).addClass('empty').removeClass('full');
      $(this).attr('style', '');
    }
  })
});