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
