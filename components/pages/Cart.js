/* eslint-disable no-lone-blocks */
const getObject = JSON.parse(localStorage.getItem('receipt'));


function itemAdder(receipt){
    return receipt.map((receipt,i) =>
        `<div class="card" id="prod-${i + 1}">
        <div class="prod">
    <div id = 'delete-button'>
      <button id="delete-button" type="button" name="button">
      <i class="fas fa-trash"></i>
      </button>
    </div>
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

      <input type="text" name="name" value=1>

      <div id = 'minus-button'>
        <button id="minus-button" type="button" name="button">
          <i class="fas fa-minus"></i>
        </button>
      </div>
    </div>
      `
    ).join(' ');
}

export default () =>
    `
    ${console.log(getObject)};
<main>

<div class="shopping-cart">

  <div class="shopping-cart-title">
    Shopping Cart
  </div>
${itemAdder(receipt)}

<div class="checkout-button">
<a href="./Checkout"> Proceed to Checkout </a>
</div>

</main>`;

{ /* <div class="prod">
    <div id = 'delete-button'>
      <button id="delete-button" type="button" name="button">
      <i class="fas fa-trash"></i>
      </button>
    </div>
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

      <input type="text" name="name" value=1>

      <div id = 'minus-button'>
        <button id="minus-button" type="button" name="button">
          <i class="fas fa-minus"></i>
        </button>
      </div>
    </div>

    <div id = 'price'>${getObject.price}</div>

</div> */ }

