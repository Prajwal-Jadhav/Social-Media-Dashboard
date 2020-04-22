var bodyElement = document.querySelector("body");
var cardElement = document.querySelectorAll(".social-media-card");
var overviewCardElement = document.querySelectorAll(".overview-card");
var whiteText = document.querySelectorAll(".dark-mode-imp-text");
var subText = document.querySelectorAll(".dark-mode-sub-text");
var toggler = document.querySelector("input[type=checkbox]");

function unckeck() {
  toggler.checked = false;
}

function addDarkMode() {
  bodyElement.classList.toggle("dark-body-background");
  var i;
  for (i = 0; i < cardElement.length; i++) {
    cardElement[i].classList.toggle("dark-card-background");
  }

  for (i = 0; i < overviewCardElement.length; i++) {
    overviewCardElement[i].classList.toggle("dark-card-background");
  }

  for (i = 0; i < whiteText.length; i++) {
    whiteText[i].classList.toggle("white-text");
  }

  for (i = 0; i < subText.length; i++) {
    subText[i].classList.toggle("blue-text");
  }
}

unckeck();
toggler.addEventListener("click", addDarkMode);
