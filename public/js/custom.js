//how its work
let x = 1;
function updateClass() {
  let a = $(".columns.active");
  a.removeClass("active");
  a = a.parent().next(".tabs1");
  if (a.length == 0) a = $(".tabs1").first();
  a.find(".columns").addClass("active");
}
$(document).ready(function() {
  setInterval(function() {
    updateClass();
  }, x * 2000);
});
//sticky header
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll <= 500) {
    $(".clearheader")
      .removeClass("clearHeader")
      .addClass("darkHeader");
  }
});
