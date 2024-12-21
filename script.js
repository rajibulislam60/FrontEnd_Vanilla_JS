const quantityDisplay = document.querySelector(".product-quantity");
const addToCartBtn = document.querySelector(".cartBtn");
const cartBox = document.querySelector(".cart-box");
const cartBoxClose = document.querySelector(".cart-box-close");

// Product data
const proucts = {
  title: "Google Pixel 9 Pro",
  price: "999.99",
  quantiy: 0,
};

let cartItems = [];

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
  if (proucts.quantiy > 0) {
    const newItem = {
      title: proucts.title,
      price: proucts.price,
      quantity: proucts.quantiy,
    };
    cartItems.push(newItem);
    updateCartDisplay();
    cartCount.innerText = cartItems.length;
  } else {
    alert("Please selected the quantity");
  }

  cartBox.style.display = "block";
});

function updateCartDisplay() {
  const cartItemList = document.getElementById("cart-items");
  cartItemList.innerHTML = "";
  let totalPrice = 0;
  cartItems.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
    <div>
        <img src="${item.image}"/>
        <h3>${item.price}</h3>
        <p>${item.quantity}</p>
        <p>${item.price * item.quantity}</p>
    </div>
    `;
    cartItemList.appendChild(cartItem);
    totalPrice += item.price * item.quantity;
  });
  document.getElementById("total-price").innerText = totalPrice;
}

cartBoxClose.addEventListener("click", () => {
  cartBox.style.display = "none";
});
