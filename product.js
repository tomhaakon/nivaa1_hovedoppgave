const products = [
  {
    image: "img/product_1.png",
    title: "Product 1",
    content: "info about product",
    id: 0,
  },
  {
    image: "img/product_2.png",
    title: "Product 2",
    content: "info about product",
    id: 1,
  },
  {
    image: "img/product_3.png",
    title: "Product 3",
    content: "info about product",
    id: 2,
  },
  {
    image: "img/product_4.png",
    title: "Product 4",
    content: "info about product",
    id: 3,
  },
  {
    image: "img/product_5.png",
    title: "Product 5",
    content: "info about product",
    id: 4,
  },
  {
    image: "img/product_6.png",
    title: "Product 6",
    content: "info about product",
    id: 5,
  },
  {
    image: "img/product_7.png",
    title: "Product 7",
    content: "info about product",
    id: 6,
  },
];
// productCards

const cardDiv = document.getElementById("productContainer");

products.forEach((product, index) => {
  console.log(index);
  cardDiv.innerHTML += `
  <div class="cardFrame">
    <div class="img-container">
        <img src="${product.image}" alt="" class="product-img">
    </div>
    <div class="product-title">
        ${product.title}
    </div>
    <div class="product-info">
    <p>${product.content}</p>
</div>
  </div>
    `;
});

// function createImageNode(imgSrc) {
//   let img = document.createElement("img");
//   img.src = imgSrc;
//   return img;
// }
// for (let key in productCards) {
//   pImg = productCards[key].image;
//   cardDiv.appendChild(createImageNode(pImg));
// }
/*
productCards.forEach((img) => {
  cardDiv.appendChild(createImageNode(img));
  console.log(img);
  console.log("img ok");
});

/*
const cardDiv = document.getElementById("cardBox");

for (let key in productCards) {
  cardDiv.innerHTML +=
    "<div class='cardFrame'><div class='product-img'><img src='" +
    productCards[key].image +
    "' class='product-img'></div><div class='product-content'>" +
    productCards[key].content +
    "</div>" +
    "<div class='product-title'>" +
    productCards[key].title +
    "<a href='#' class='buy'>Buy Now</a></div></div>";
}
/*
const cardBoxDiv = document.getElementById("cardBox");

for (let key in productCards) {
  cardBoxDiv.innerHTML +=
    productCards[key].title +
    "<br>" +
    "<img src='" +
    productCards[key].image +
    "' class='productImg'>";
  productCards[key].title + "<br>";
}


let cardImage = document.getElementById(test);
cardImage.setAttribute("src", "img.jpg");

*/
