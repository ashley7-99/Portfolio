const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 6895,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 6195,
    colors: [
      {
        code: "lightgray",
        img: "air.png",
      },
      {
        code: "green",
        img: "air2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 5495,
    colors: [
      {
        code: "lightgray",
        img: "blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 14895,
    colors: [
      {
        code: "black",
        img: "crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 9895,
    colors: [
      {
        code: "gray",
        img: "hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, _) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});




// function to add product to cart
function addToCart(productName, productImage) {
  
  
 
    let cart = document.getElementById("cart");
  

    let existingItem = document.querySelector(`#cart li[data-product="${productName}"]`);
  

   // if an item with the same product name already exists in the cart
    if (existingItem) {
        let quantity = parseInt(existingItem.dataset.quantity);
        quantity++;
        existingItem.dataset.quantity = quantity;
        existingItem.querySelector('span.quantity').innerText = `x${quantity}`;
    } 
    
    else {
      let newItem = document.createElement("li");
        newItem.dataset.product = productName;
        newItem.dataset.quantity = 1;

       
        let img = document.createElement("img");
        img.src = productImage;
        img.alt = productName;
        img.width = 100; 
        img.height = 100;
        newItem.appendChild(img);

        
        let spanProductName = document.createElement("span");
        spanProductName.innerText = productName;
        newItem.appendChild(spanProductName);

        
        let decreaseBtn = document.createElement("button");
        decreaseBtn.innerText = "-";
        decreaseBtn.addEventListener("click", function() {
            let quantity = parseInt(newItem.dataset.quantity);
            if (quantity > 1) {
                quantity--;
                newItem.dataset.quantity = quantity;
                spanQuantity.innerText = `x${quantity}`;
              
            }
        });
        newItem.appendChild(decreaseBtn);

        let spanQuantity = document.createElement("span");
        spanQuantity.innerText = " x1 ";
        spanQuantity.classList.add("quantity");
        newItem.appendChild(spanQuantity);

        let increaseBtn = document.createElement("button");
        increaseBtn.innerText = " + ";
        increaseBtn.addEventListener("click", function() {
            var quantity = parseInt(newItem.dataset.quantity);
            quantity++;
            newItem.dataset.quantity = quantity;
            spanQuantity.innerText = `x${quantity}`;
        });
        newItem.appendChild(increaseBtn);

        // Create delete button with X icon
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "&#10062;"; // X icon
        deleteBtn.addEventListener("click", function() {
            newItem.remove(); // Remove the item from the cart when delete button is clicked
        });
        newItem.appendChild(deleteBtn);

        cart.appendChild(newItem);
    }
}

// Add event listeners to all buttons with class "addCart"
document.addEventListener("DOMContentLoaded", function() {
    let addButtons = document.querySelectorAll(".addCart");
    addButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            let productName = button.parentElement.querySelector("h3").innerText;
            let productImage = button.parentElement.querySelector("img").src;
            addToCart(productName, productImage);
        });
    });
});




