function hideWhenClicked() {
  var hidden = document.getElementById("hide_this");

  hidden.addEventListener('click', function(event) {
      hidden.style.display = "none";
});
}
