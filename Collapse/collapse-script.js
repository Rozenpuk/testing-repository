function myFunction() {
    $("#myDropdown").toggleClass("show");
}

$(window).on('click', function(event) {
  if ($(event.target).parents('.dropdown').length == 0) {
    alert($(event.target).parents('.dropdown').length)
    if ($("#myDropdown").hasClass('show')) {
      $("#myDropdown").removeClass('show');
    }
  }
  $(":focus").blur();
});

$(document).ready(function () {
    $(document).on("click", ".square-radio", function () {
      if ($(this).hasClass("square-radio--clicked")) {
        $(".dropdown-content").find(".square-radio").removeClass("square-radio--clicked");
      } else {
        $(".dropdown-content").find(".square-radio").removeClass("square-radio--clicked");
        $(this).toggleClass("square-radio--clicked");
      }
    });
});
