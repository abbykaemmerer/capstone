export default (products) =>
    products.map((product,i) =>
        `<div class="card" id="prod-${i + 1}">
      <div class="prodImg">
      <img src= "${product.image}" alt="" height=250>
      </div>
      <div class="prodName">
      ${product.name}
      </div>
      <div class="prodDescrip">
      ${product.description}
      </div>
      <div class="prodPrice">
      ${product.price}
      </div>
      <div class="prodButton">
      <button>Add to Cart</button>
      </div>
  </div>`
    ).join(' ');
