$.unckeck = function () {
  $("input[type=checkbox]").prop("checked", false);
};

$(document).ready($.unckeck);

$("input[type=checkbox]").change(function addDarkmode() {
  $("body").toggleClass("dark-body-background");
  $(".social-media-card").toggleClass("dark-card-background");
  $(".overview-card").toggleClass("dark-card-background");
  $(".dark-mode-imp-text").toggleClass("white-text");
  $(".dark-mode-sub-text").toggleClass("blue-text");
});

// function uncheck() {
//     $("input[type=checkbox]").prop("checked", false);
//   }
