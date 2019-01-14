window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("floatingBtn").style.display = "block";
  } else {
    document.getElementById("floatingBtn").style.display = "none";
  }
}

$(document).ready(function () {
  new WOW().init();
  // Listener bound to `.stop-propagation`, no delegation
  $('.stop-propagation').on('click', function (e) {
    e.stopPropagation();
  });

  const accordionSections = $(".collapse-section");
  const accordionIcons = $(".accordionIcon");
  for (let i = 0; i < accordionSections.length; i++) {
    accordionSections[i].addEventListener('click', function () {
      accordionIcons[i].getElementsByClassName("plus")[0].classList.toggle("plus-inactive");
      accordionIcons[i].getElementsByClassName("minus")[0].classList.toggle("minus-inactive");
    });
  }
});