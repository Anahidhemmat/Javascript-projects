if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  const removeCartItemBtns = document.getElementsByClassName("btn-danger");
  for (let i = 0; i < removeCartItemBtns.length; i++) {
    let btn = removeCartItemBtns[i];
    btn.addEventListener("click", removeCartItem);
  }

  const quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInputs.length; i++) {
    const input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  const addToCartBtns = document.getElementsByClassName("shop-item-button");
  for (let i = 0; i < addToCartBtns.length; i++) {
    const btn = addToCartBtns[i];
    btn.addEventListener("click", addToCart);
  }
  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchase);
}

function purchase() {
  alert("Thank you for your purchase");
  const cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

function removeCartItem(e) {
  let btnClicked = e.target;
  btnClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function quantityChanged(e) {
  const input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}

function addToCart(e) {
  const btn = e.target;
  const shopItem = btn.parentElement.parentElement;
  const title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
  const price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  const imgSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
  // console.log(title, price, imgSrc);
  addItemToCart(title, price, imgSrc);
  updateCartTotal();
}

function addItemToCart(title, price, imgSrc) {
  const cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  const cartItemNames = document.getElementsByClassName("cart-item-title");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i] == title) {
      alert("This item is already added to the cart");
      return;
    }
  }

  const cartRowContents = `
  <div class="cart-item cart-column">
            <img
              class="cart-item-image"
              src="${imgSrc}"
              width="100"
              height="100"
            />
            <span class="cart-item-title">${title}</span>
          </div>
          <span class="cart-price cart-column">${price}</span>
          <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1" />
            <button class="btn btn-danger" type="button">REMOVE</button>
          </div>
  `;
  const cartItem = document.getElementsByClassName("cart-items")[0];
  cartRow.innerHTML = cartRowContents;
  cartItem.append(cartRow);

  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeCartItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}
function updateCartTotal() {
  const cartItemContainer = document.getElementsByClassName("cart-items")[0];
  const cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i];
    const priceElement = cartRow.getElementsByClassName("cart-price")[0];
    const quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    const price = parseFloat(priceElement.innerText.replace("$", ""));
    const quantity = quantityElement.value;

    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
