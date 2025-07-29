function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const index = cart.findIndex(item => item.name === name);

  if (index > -1) {
    cart[index].quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchIcon = document.getElementById("searchIcon");

  searchIcon.addEventListener("click", function () {
    const searchValue = searchInput.value.toLowerCase().trim();
    const items = document.querySelectorAll(".menu-item");

    items.forEach(item => {
      const titleElement = item.querySelector("h3");
      const titleText = titleElement.textContent;
      const lowerTitle = titleText.toLowerCase();

      if (searchValue === "") {
        item.style.display = "block";
        titleElement.innerHTML = titleText; // Reset title
      } else if (lowerTitle.includes(searchValue)) {
        item.style.display = "block";
        const regex = new RegExp(`(${searchValue})`, "gi");
        titleElement.innerHTML = titleText.replace(regex, '<mark>$1</mark>');
      } else {
        item.style.display = "none";
        titleElement.innerHTML = titleText; // Remove previous highlight
      }
    });
  });
});

function filterMenu(category) {
  const items = document.querySelectorAll(".menu-item");

  items.forEach(item => {
    const itemCategory = item.getAttribute("data-category");

    if (category === "all" || itemCategory === category) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}


