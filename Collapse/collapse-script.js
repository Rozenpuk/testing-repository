function myFunction() {
    $("#myDropdown").toggleClass("show");
}

$(window).on('click', function(event) {
  if (!$(event.target).parents('.dropdown').length > 0) {
          if ($("#myDropdown").hasClass('show')) {
            $("#myDropdown").removeClass('show');
          }
        }
        $(":focus").blur();
  });

// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }

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
