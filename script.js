let cart = [];

document.getElementById('add-to-cart').addEventListener('click', function() {
  cart.push({name: 'Product Name', price: 9.99});
  updateCart();
});

function updateCart() {
  document.getElementById('cart-items').innerHTML = '';
  cart.forEach(function(item, index) {
    let li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price}`;
    document.getElementById('cart-items').appendChild(li);
  });
}
