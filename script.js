const quantityDisplay = document.querySelector(".product-quantity");
const addToCartBtn = document.querySelector(".cartBtn");
const cartBox = document.querySelector(".cart-box");
const cartBoxClose = document.querySelector(".cart-box-close")

// Product data
const proucts = {
  title: "Google Pixel 9 Pro",
  price: "999.99",
  quantiy: 0,
};

// Make dynamic
document.getElementById("product-title").innerText = proucts.title;
document.getElementById("product-price").innerText = `$${proucts.price}`;

// Quantity Increase and decrease
document
  .querySelector(".addBtn button[aria-label='Decrease']")
  .addEventListener("click", () => {
    if (proucts.quantiy > 0) {
      let minus = --proucts.quantiy;
      quantityDisplay.innerText = minus;
    }
  });
document
  .querySelector(".addBtn button[aria-label='Increase']")
  .addEventListener("click", () => {
    let plus = ++proucts.quantiy;
    quantityDisplay.innerText = plus;
  });

//   Add to Cart Button
addToCartBtn.addEventListener("click", () => {
  cartBox.style.display = "block";
});
cartBoxClose.addEventListener("click", ()=>{
    cartBox.style.display="none"
})
