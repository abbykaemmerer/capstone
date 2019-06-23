export default (receipt) =>
    `<main>

<div class="shopping-cart">

  <div class="shopping-cart-title">
    Shopping Cart
  </div>

  <div class="prod">
    <div id = 'image'><img src="${localStorage.getItem('image')}" height=100></div>
    <div>
    <div id = 'name'>${receipt.name}</div>
    <div id = 'desc'>${receipt.description}</div>
    </div>
    <div>
    <div id = 'plus-button'></div>
    <div id = 'box'></div>
    <div id = 'minus-button'></div>
    </div>
    <div id = 'price' ></div>
  </div>



</main>`;

console.log();

{ /* <div class="item-image">
<img src="${state.image2}" alt="" height="200" width="175"/>
</div>

<div class="item-description">
<span>Product 1</span>
<span>Description</span>
</div>

<div class="quantity">
<button class="plus-button" type="button" name="button">
  <i class="fas fa-plus"></i>
</button>

<input type="text" name="name" value="1">

<button class="minus-button" type="button" name="button">
<i class="fas fa-minus"></i>
</button>
</div>
<div class="total-price">$2342</div>
</div>

<div class="item">

<div class="item-image">
  <img src="${state.image1}" alt="" height="200" width="175" />
</div>

<div class="item-description">
    <span>Product 2</span>
    <span>Description</>
</div>

<div class="quantity">
  <button class="plus-button" type="button" name="button">
    <i class="fas fa-plus"></i>
  </button>

<input type="text" name="name" value="1">

<button class="minus-button" type="button" name="button">
  <i class="fas fa-minus"></i>
</button>
</div>
<div class="total-price">$22</div>
</div>

<div class="item">

  <div class="item-image">
    <img src="${state.image3}" alt="" height="200" width="175"/>
  </div>

  <div class="item-description">
    <span>Product 3</span>
    <span>Description</span>
  </div>

  <div class="quantity">
    <button id="plusButton" type="button" name="button">
      <i class="fas fa-plus"></i>
    </button>

  <input type="text" name="name" value="1">

  <button id="minus-button" type="button" name="button">
    <i class="fas fa-minus"></i>
  </button>
  </div>
  <div class="total-price">$653</div>
</div>
<div class="checkout-button">
<a href="./Checkout"> Proceed to Checkout </a>
</div>
</div> */ }


