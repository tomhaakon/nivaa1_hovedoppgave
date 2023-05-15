const partnerContainer = document.querySelector(".partnerContainer");
const partnerModal = document.querySelector("#PModal");
const cardDiv = document.querySelector("#inputCardFrames");
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

const cardListener = () => {
  const cardEvent = document.querySelectorAll(".cardFrame");
  cardEvent.forEach((card, index) => {
    card.addEventListener("click", () => {
      openModal(partners[index]);
    });
  });
};

const loopCards = () => {
  cardDiv.innerHTML = "";
  partners.forEach((partner) => {
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
    cardListener();
  });
};

loopCards();

const openModal = (partnerInfo) => {
  partnerModal.style.display = "block";
  partnerContainer.innerHTML += `
  <div class="contentHeadline">${partnerInfo.title}</div>
  <hr class="divline" />
 <p class="partnerText">${partnerInfo.content}</p><br>
  <img src="${partnerInfo.image}" width="100px" alt="" class="product-img" style="filter: invert(1); float: right;">
  `;
};

const partnerSpan = document.querySelector(".PClose");
partnerSpan.addEventListener("click", () => {
  partnerModal.style.display = "none";
  partnerContainer.innerHTML = "";
});
