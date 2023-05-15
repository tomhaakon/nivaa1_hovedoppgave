/* CONTACT MODAL */
const ContactModal = document.getElementById("modalContainer");
const ContactBtn = document.getElementById("OpenContactModal");

const ContactSpan = document.getElementsByClassName("ContactClose")[0];

ContactBtn.onclick = function () {
  ContactModal.style.display = "block";
};

ContactSpan.onclick = function () {
  ContactModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == ContactModal) {
    ContactModal.style.display = "none";
  }
};
/*USER MODAL */
const UsrModal = document.getElementById("userModal");
const UsrBtn = document.getElementById("UsrOpenModal");
const UsrBtnOc = document.getElementById("UsrOpenModalButClose");

const UsrSpan = document.getElementsByClassName("UsrClose")[0];

UsrBtn.onclick = function () {
  UsrModal.style.display = "block";
};

UsrSpan.onclick = function () {
  UsrModal.style.display = "none";
};
UsrBtnOc.onclick = function () {
  RModal.style.display = "none";
  UsrModal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == UsrModal) {
    UsrModal.style.display = "none";
  }
};
/*REGISTER MODAL */
const RModal = document.getElementById("RegModal");
const RegBtn = document.getElementById("RegOpenModal");

const RegSpan = document.getElementById("RClose");
const RegCancel = document.getElementById("RegCancel");

RegBtn.onclick = function () {
  UsrModal.style.display = "none";
  RModal.style.display = "block";
};
RegSpan.onclick = function () {
  RModal.style.display = "none";
};
RegCancel.onclick = function () {
  RModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == RModal) {
    RModal.style.display = "none";
  }
};
