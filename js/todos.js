// check off specific todos by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// click on x to delete todos

$("ul").on("click", "span", function (event) {
  $(this).parent().fadeOut(500, function () {
    $(this).remove();
  });
  event.stopPropagation();
});

// create new todos
$("input[type='text']").on("keypress", function (event) {
  if (event.which === 13) {
    // grabbing new todo text from input
    var toDoText = $(this).val();
    // clear input field
    $(this).val("");
    // create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
  }
});
// toggle input
$(".fa-plus").on("click", function () {
  $("input[type='text']").fadeToggle();
});
