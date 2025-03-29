$(document).ready(function () {
  // Smooth scrolling for nav links
  $('a.nav-link').on('click', function (e) {
      if (this.hash !== '') {
          e.preventDefault();

          const hash = this.hash;

          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function () {
              window.location.hash = hash;
          });
      }
  });

  // Animate on scroll
  AOS.init();

  // Initialize cart
  if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
  }

  updateCartCount();
});

function addToCart(productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem('cart'));
  cart.push({ name: productName, price: productPrice });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
  alert(productName + ' has been added to your cart.');
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem('cart'));
  document.getElementById('cart-count').innerText = cart.length;
}
function checkLogin() {
  const loggedIn = sessionStorage.getItem('loggedIn');
  if (!loggedIn) {
      window.location.href = 'index.html';
  }
}
checkLogin();