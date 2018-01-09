$(document).ready(function() {


  $("button#ladder1").click(function() {
    $("ul#ladderlist").prepend("<li class='piece'><img src='img/ladder1.jpg'></li>");

  });
  $("ul#ladderlist").click(function() {
    $("ul#ladderlist li").first().remove();
});

  $("button#ladder2").click(function() {
    $("ul#ladderlist").prepend("<li class='piece'><img src='img/ladder2.jpg'></li>");

  });

  $("button#ladder3").click(function() {
    $("ul#ladderlist").prepend("<li class='piece'><img src='img/ladder3.jpg'></li>");

  });

  $("button#ladder4").click(function() {
    $("ul#ladderlist").prepend("<li class='piece'><img src='img/ladder4.jpg'></li>");

  });

});
