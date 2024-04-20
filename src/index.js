function updateSubtotal(product) {
  const price = product.querySelector(".price span").innerHTML;
  const quantity = product.querySelector(".quantity input").value;
  const subTotalElement = product.querySelector(".subtotal span");
  const subTotalResult = quantity * price;
  subTotalElement.innerHTML = subTotalResult;
  return subTotalResult;
}

function calculateAll() {
  const allProducts = document.getElementsByClassName("product");
  let total = 0;
  for (let i = 0; i < allProducts.length; i++) {
    total += updateSubtotal(allProducts[i]);
  }

  const totalElement = document.querySelector("#total-value span");
  totalElement.innerHTML = total;
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  target.parentNode.parentNode.remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productName = document.querySelector(".product-name");
  const productPrice = document.querySelector(".product-price");
  var tableBody = document.querySelector("#cart tbody");
  var newRow = document.createElement("tr");
  newRow.classList.add("product");
  newRow.innerHTML = `
  <td class="name">
            <span>${productName.value}</span>
          </td>
          <td class="price">$<span>${productPrice.value}</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
  
  `;
  tableBody.appendChild(newRow);

  productName.value = "";
  productPrice.value = "";
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const createProductBtn = document.getElementById("create");
  createProductBtn.addEventListener("click", createProduct);

  const removeButtons = document.querySelectorAll(".btn-remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", removeProduct);
  });
});
