const partners = [
  {
    image: "../img/partner1.png",
    title: "Partner 1",
    content: "info about Partner 1",
    id: 0,
  },
  {
    image: "../img/partner2.png",
    title: "Partner 2",
    content: "info about Product 2",
    id: 1,
  },
  {
    image: "../img/partner3.png",
    title: "Partner 3",
    content: "info about Partner3",
    id: 2,
  },
  {
    image: "../img/partner4.png",
    title: "Partner 4",
    content: "info about Partner 4",
    id: 3,
  },
  {
    image: "../img/partner5.png",
    title: "Partner 5",
    content: "info about Partner 5",
    id: 4,
  },
];

const cardDiv = document.getElementById("inputCardFrames");

partners.forEach((partner, index) => {
  console.log(index);
  cardDiv.innerHTML += `
    <div class="cardFrame">
      <div class="img-container">
          <img src="${partner.image}" alt="" class="product-img" style="filter: invert(1);">
      </div>
      <div class="product-title">
          ${partner.title}
      </div>
      <div class="product-info">
      <p>${partner.content}</p>
  </div>
    </div>
      `;
});

/*PARTNER */
const PartnerModal = document.getElementById("PModal");
const PartnerBtn = document.getElementById("POpen");
const PartnerSpan = document.getElementsByClassName("PClose");

PartnerBtn.onclick = function () {
  /* åpne vindu */
  PartnerModal.style.display = "block";
};
PartnerSpan.onclick = function () {
  PartnerModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == PartnerModal) {
    PartnerModal.style.display = "none";
  }
};
