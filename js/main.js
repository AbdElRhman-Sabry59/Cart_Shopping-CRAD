let inputContent = document.querySelector(".input-content");
let btnAddProduct = document.querySelector(".addProduct");
let containerProduct = document.querySelector(".content-product");
let temp;
let mood = "add";
let data = [
  {
    id: 1,
    name: "Product_1",
    description: "chairs",
  },
  {
    id: 2,
    name: "Product_2",
    description: "chairs",
  },
  {
    id: 3,
    name: "Product_3",
    description: "chairs",
  },
  {
    id: 4,
    name: "Product_4",
    description: "chairs",
  },
];

// show data
function showData(products) {
  if (products.length === 0) {
    alert("You Deleted All Product !!");
  }
  containerProduct.innerHTML = "";
  products.forEach((ele) => {
    containerProduct.innerHTML += `
    <div> ${ele.id} ___ ${ele.name} ___ ${ele.description}
    <button onclick ="deleteProduct(${ele.id})">Delete Product</button>
    <button onclick ="updateProduct(${ele.id})">Update Product</button>
    </div>
    
    `;
  });
}
window.onload = function () {
  showData(data);
};
// add data
btnAddProduct.addEventListener("click", function addData() {
  if (inputContent.value === "") {
    alert("Please Write Product !!");
  } else {
    let lastID;
    if (data.length > 0) {
      lastID = data[data.length - 1].id;
    } else {
      lastID = 0;
    }
    if (mood === "add") {
      data.push({
        id: ++lastID,
        name: inputContent.value,
        description: "chairs",
      });
    } else if (mood === "update") {
      let index = data.findIndex((ele) => ele.id === temp.id);
      data[index].name = inputContent.value;

      // Reset the mood to 'add'
      mood = "add";
      btnAddProduct.innerHTML = "Add Product";
    }
    showData(data);
    inputContent.value = "";
  }
});

// delete data
function deleteProduct(id) {
  let index = data
    .map((ele) => {
      return ele.id;
    })
    .indexOf(id);
  if (index !== -1) {
    data.splice(index, 1);
  }

  showData(data);
}
// update data
function updateProduct(id) {
  let productToUpdate = data.find((ele) => ele.id === id);

  inputContent.value = productToUpdate.name;

  mood = "update";
  temp = productToUpdate;

  btnAddProduct.innerHTML = "Update";
}
