const products = [
  {
    image: "../img/product_1.png",
    title: "Product 1",
    content: "info about product",
    id: 0,
  },
  {
    image: "../img/product_2.png",
    title: "Product 2",
    content: "info about product",
    id: 1,
  },
  {
    image: "../img/product_3.png",
    title: "Product 3",
    content: "info about product",
    id: 2,
  },
  {
    image: "../img/product_4.png",
    title: "Product 4",
    content: "info about product",
    id: 3,
  },
  {
    image: "../img/product_5.png",
    title: "Product 5",
    content: "info about product",
    id: 4,
  },
  {
    image: "../img/product_6.png",
    title: "Product 6",
    content: "info about product",
    id: 5,
  },
  {
    image: "../img/product_2.png",
    title: "Product 7",
    content: "info about product",
    id: 6,
  },
];
// productCards

const cardDiv = document.getElementById("inputCardFrames");

products.forEach((product, index) => {
  console.log(index);
  cardDiv.innerHTML += `
  <div class="cardFrame">
    <div class="img-container" style="mix-blend-mode: overlay;">
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
