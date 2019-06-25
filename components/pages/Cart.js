/* eslint-disable no-lone-blocks */
const getObject = JSON.parse(localStorage.getItem('bill'));

export default () =>
    `
    ${console.log(getObject)};
<main>

<div class="shopping-cart">

  <div class="shopping-cart-title">
    Shopping Cart
  </div>

<div class="prod">
    <div id = 'image'>
      <img src="${getObject.image}" height = 100>
    </div>
    <div id = 'desc'>
      <span><div id = 'name'>${getObject.name}</div></span>
      <span>${getObject.description}</span>
    </div>
    <div id = 'qty'>
      <div id = 'plus-button'>
        <button id="plus-button" type="button" name="button">
          <i class="fas fa-plus"></i>
        </button>
      </div>

      <input type="text" name="name" value=${getObject.qty}>

      <div id = 'minus-button'>
        <button id="minus-button" type="button" name="button">
          <i class="fas fa-minus"></i>
        </button>
      </div>
    </div>

    <div id = 'price'>${getObject.price}</div>

</div>
<div class="checkout-button">
<a href="./Checkout"> Proceed to Checkout </a>
</div>

</main>`;

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
