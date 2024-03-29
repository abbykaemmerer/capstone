
function itemAdder(bill){
    console.log('Cart has the current bill, and it can use it as needed to generate markup!', bill);
    let content = '';

    for(let i = 0; i < bill.length; i++){
        content += `

    <div class="card" id="prod-${i + 1}">
        <div class="prod">

          <div id = 'image'>
            <img src="${bill[i].image}" height = 150>
          </div>
          <div id = 'desc'>
            <span><div id = 'name'>${bill[i].name}</div></span>
            <span>${bill[i].description}</span>
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
          <div id="price">${bill[i].price}</div>
        </div>
      </div>`;
    }

    return content;
}

export default (state) => `
 <main>
<div class="shopping-cart">
              <div class="shopping-cart-title">
              Shopping Cart
              </div>


${itemAdder(state.bill)}

<div class="checkout-button">
    <a href="./Checkout"> Proceed to Checkout </a>
    </div>
    </main>
      `;
