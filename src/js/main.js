const productId = document.getElementById("productId");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productCategory = document.getElementById("productCategory");
const addButton = document.getElementById("addButton");

const deleteId = document.getElementById("deleteId");
const deleteButton = document.getElementById("deleteButton");

const updateId = document.getElementById("updateId");
const newName = document.getElementById("newName");
const newCategory = document.getElementById("newCategory");
const newPrice = document.getElementById("newPrice");
const updateButton = document.getElementById("updateButton");

const inventoryList = document.getElementById("inventoryList");

const inventory = [];

function renderInventory() {
  inventoryList.innerHTML = "";
  inventory.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `ID: ${product.id}, Name: ${product.name}, Category: ${product.category}, Price: $${product.price}`;
    inventoryList.appendChild(li);
  });
}

addButton.addEventListener('click', () => {
  const id = productId.value.trim();
  const name = productName.value.trim();
  const category = productCategory.value.trim();
  const price = parseFloat(productPrice.value);

  if (!id || !name || !category || isNaN(price)) {
    alert("Please fill out all fields correctly.");
    return;
  }

  const product = { id, name, category, price };
  inventory.push(product);
  renderInventory();

  productId.value = "";
  productName.value = "";
  productCategory.value = "";
  productPrice.value = "";
});

deleteButton.addEventListener('click', () => {
  const idToDelete = deleteId.value.trim();

  const index = inventory.findIndex(product => product.id === idToDelete);
  if (index !== -1) {
    inventory.splice(index, 1);
    alert(`Product with ID ${idToDelete} has been deleted.`);
    renderInventory();
    deleteId.value = "";
  } else {
    alert(`No product found with ID ${idToDelete}.`);
  }
});

updateButton.addEventListener('click', () => {
  const idToUpdate = updateId.value.trim();
  const product = inventory.find(p => p.id === idToUpdate);

  if (!product) {
    alert("Product not found.");
    return;
  }

  if (newName.value.trim()) product.name = newName.value.trim();
  if (newCategory.value.trim()) product.category = newCategory.value.trim();
  if (newPrice.value.trim()) product.price = parseFloat(newPrice.value);

  alert("Product updated successfully.");
  renderInventory();

  updateId.value = "";
  newName.value = "";
  newCategory.value = "";
  newPrice.value = "";
});
