const PicModal = document.getElementById("Pic-Modal");
const PicBtn = document.getElementById("aboutPic");
const PicSpan = document.getElementsByClassName("Pic-Close")[0];

PicBtn.onclick = function () {
  PicModal.style.display = "block";
};

PicSpan.onclick = function () {
  PicModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == PicModal) {
    PicModal.style.display = "none";
  }
};
