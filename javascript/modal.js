/* CONTACT MODAL */
const modal = document.getElementById("modalContainer");
const btn = document.getElementById("openModal");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
/*USER MODAL */
const Usr_modal = document.getElementById("userModal");
const Usr_btn = document.getElementById("UsrOpenModal");
const Usr_btn_oc = document.getElementById("UsrOpenModalButClose");

const Usr_span = document.getElementsByClassName("UsrClose")[0];

Usr_btn.onclick = function () {
  Usr_modal.style.display = "block";
};

Usr_span.onclick = function () {
  Usr_modal.style.display = "none";
};
Usr_btn_oc.onclick = function () {
  Reg_modal.style.display = "none";
  Usr_modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == User_modal) {
    Usr_modal.style.display = "none";
  }
};
/*REGISTER MODAL */
const Reg_modal = document.getElementById("RegModal");
const Reg_btn = document.getElementById("RegOpenModal");

const Reg_span = document.getElementById("RClose");
const Reg_cancel = document.getElementById("RegCancel");

Reg_btn.onclick = function () {
  Usr_modal.style.display = "none";
  Reg_modal.style.display = "block";
};
Reg_span.onclick = function () {
  Reg_modal.style.display = "none";
};
Reg_cancel.onclick = function () {
  Reg_modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == Reg_modal) {
    Reg_modal.style.display = "none";
  }
};
