// Retrieve cart data from localStorage or use empty array if none
document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const cartContainer = document.getElementById("cart-items");
  const itemCount = document.getElementById("item-count");
  const summaryCount = document.getElementById("summary-count");
  const summaryTotal = document.getElementById("summary-total");

  // Update cart display in the UI
  function updateCartDisplay() {
    cartContainer.innerHTML = "";
    let totalItems = 0;
    let totalPrice = 0;

    // If cart is empty, show message
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p style='padding:40px; color:#aaa;'>Your cart is empty.</p>";
    } else {
      cart.forEach((item, index) => {
        const itemTotal = item.quantity * item.price;
        totalItems += item.quantity;
        totalPrice += itemTotal;

        // Create cart item HTML block
        const itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.innerHTML = `
          <div class="product">
            <div class="info">
              <strong>${item.name}</strong>
            </div>
          </div>
          <div class="quantity">
            <button class="decrease" data-index="${index}">-</button>
            <span>${item.quantity}</span>
            <button class="increase" data-index="${index}">+</button>
          </div>
          <div class="price">RM ${item.price.toFixed(2)}</div>
          <div class="total">RM ${itemTotal.toFixed(2)}</div>
        `;
        cartContainer.appendChild(itemDiv);
      });
    }

    // Update totals in header and summary section
    itemCount.textContent = `${totalItems} Items`;
    summaryCount.textContent = totalItems;
    summaryTotal.textContent = `RM ${totalPrice.toFixed(2)}`;

    attachQuantityButtons();
  }

  // Add click events to increase/decrease buttons
  function attachQuantityButtons() {
    document.querySelectorAll(".increase").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = btn.getAttribute("data-index");
        cart[index].quantity += 1;
        saveCart();
      });
    });

    document.querySelectorAll(".decrease").forEach(btn => {
      btn.addEventListener("click", () => {
        const index = btn.getAttribute("data-index");
        if (cart[index].quantity > 1) {
          cart[index].quantity -= 1;
        } else {
          cart.splice(index, 1);
        }
        saveCart();
      });
    });
  }

  // Save updated cart to localStorage and update UI
  function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }
  updateCartDisplay();
});

// Separate DOMContentLoaded for button functionality
document.addEventListener("DOMContentLoaded", function () {
  const checkoutBtn = document.getElementById("checkoutBtn");
  const continueBtn = document.getElementById("continueBtn");

  // When "Checkout" button is clicked
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", function () {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];

      // Prevent checkout if cart is empty
      if (cart.length === 0) {
        alert("Cannot check out when cart is empty.");
        return;
      }

      localStorage.removeItem("cart");

      // Optionally clear displayed cart items (for redundancy)
      const cartItems = document.querySelector(".cart-items");
      const itemCount = document.getElementById("itemCount");
      const summaryCount = document.getElementById("summaryCount");
      const totalAmount = document.getElementById("totalAmount");

      // Reset UI to reflect empty cart
      if (cartItems) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty.</p>';
      }

      if (itemCount) itemCount.textContent = "0";
      if (summaryCount) summaryCount.textContent = "0 Items";
      if (totalAmount) totalAmount.textContent = "RM 0.00";

      // Show confirmation and redirect to homepage
      alert("Order successfully placed!");
      window.location.href = "home.html";
    });
  }

  // When "Continue Ordering" button is clicked
  if (continueBtn) {
    continueBtn.addEventListener("click", function () {
      window.location.href = "menu_exp.html"; // Go back to menu page
    });
  }
});
