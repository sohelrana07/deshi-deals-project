// getId Access
function getId(id) {
  const getElement = document.getElementById(id);
  return getElement;
}

// add to card btn
// document.getElementById("cart-btn-1").addEventListener("click", function () {
//   const cardTitle = getId("card-title-1").innerText;
//   const cardPrice = getId("card-price-1").innerText;
//   const total = getId("total-price").innerText;
//   const discounT = getId("discount").innerText;

//   const discountBalance = (Number(cardPrice) * Number(discounT)) / 100;
//   console.log(discountBalance);
//   const TotalPrice = Number(cardPrice) - discountBalance;
//   const newTotalPrice = Number(total) + TotalPrice;

//   getId("total-price").innerText = newTotalPrice.toFixed(2);
//   getId("total-price1").innerText = newTotalPrice.toFixed(2);

//   // CREATE NEW ELEMENTS
//   const newElement = document.createElement("div");
//   newElement.innerHTML = `
//             <div
//               class="flex justify-between items-center bg-gray-100 p-5 rounded-lg mb-4"
//             >
//               <figure>
//                 <img src="assets/kitchen-1.png" width="62" alt="" />
//               </figure>
//               <div>
//                 <h3 class="font-semibold">${cardTitle}</h3>
//                 <p class="text-gray-400 text-sm">${cardPrice}</p>
//               </div>
//             </div>
//     `;

//   getId("cart-container").appendChild(newElement);
// });

// Traverse technique
const cartBtn = document.getElementsByClassName("card-btn");
for (const btn of cartBtn) {
  btn.addEventListener("click", function () {
    const productImg = btn.parentNode.parentNode.children[0].children[0].src;

    const productTitle =
      btn.parentNode.parentNode.children[1].children[1].innerText;

    const productPrice =
      btn.parentNode.parentNode.children[1].children[2].children[0].innerText;

    const totalPrice =
      btn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        .children[1].children[1].children[5].children[1].children[0].innerText;

    const discounT =
      btn.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        .children[1].children[1].children[5].children[2].children[0].innerText;

    const totalAmounts = Number(productPrice) + Number(totalPrice);
    const totalDiscount = (totalAmounts * Number(discounT)) / 100;
    const DiscountPrice = Number(totalAmounts) - totalDiscount;

    const Quantity = getId("total-quantity").innerText;
    const totalQuantity = Number(Quantity) + 1;

    getId("total-price").innerText = DiscountPrice.toFixed(2);
    getId("total-quantity").innerText = totalQuantity;

    // parent container
    const cartContainer = getId("cart-container");

    // create new element
    const newElement = document.createElement("div");
    newElement.innerHTML = `
            <div
              class="flex justify-between items-center gap-3 bg-gray-100 p-5 rounded-lg mb-4"
            >
               <figure>
                 <img src="${productImg}" width="62" alt="" />
               </figure>
               <div>
                 <h3 class="font-semibold">${productTitle}</h3>
                 <p class="text-gray-400 text-sm">Price: ${productPrice} Tk</p>
               </div>
             </div>
    `;

    cartContainer.appendChild(newElement);
  });
}

// all buy btn
document.getElementById("buy-btn").addEventListener("click", function () {
  getId("cart-container").innerHTML = "";
  getId("total-price").innerText = "0";
  getId("total-quantity").innerText = "0";
});

// buy order container clear btn setup
getId("buy-order-btn").addEventListener("click", function () {
  getId("cart-container").innerHTML = "";
  getId("total-price").innerText = "0";
  getId("total-quantity").innerText = "0";
});
