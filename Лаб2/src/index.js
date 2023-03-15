var blocks = document.querySelectorAll(".info");
var buttons = document.querySelectorAll(".plus-bttn");
buttons.forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    if (btn.classList.contains("not-checked")) {
      btn.classList.add("checked");
      btn.classList.remove("not-checked");
      blocks[index].classList.remove("display-none");
    } else {
      btn.classList.remove("checked");
      btn.classList.add("not-checked");
      blocks[index].classList.add("display-none");
    }
  });
});
