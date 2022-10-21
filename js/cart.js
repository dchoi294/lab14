/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  // document.getElementById('cart').deleterow()
  var rowCount = table.rows.length;
        for (var i = rowCount - 1; i > 1; i--) {
            table.deleteRow(i);
}
}
// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // DONE: Find the table body
let table = getElementById('cart');
  // DONE: Iterate over the items in the cart
for (let i = 0; i < this.items; i++);
  // DONE: Create a TR
  let tr = document.createElement('tr');
  // DONE: Create a TD for the delete link, quantity,  and the item
  let xDelete = document.createElement('td');
  xDelete.textContent ='X';
  tr.appendChild('xDelete');

  let quantity = createElement('td');
  quantity.textContent = 'Quanitity';
  tr.appendChild('quantity');

  let item = createElement('td');
  item.textContent = 'Item';
  tr.appendChild('item');
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

}



function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();