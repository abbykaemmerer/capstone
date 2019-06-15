export default () =>    ` <main>
<div class="shopping-cart">

  <div class="shopping-cart-title">
    Shopping Cart
  </div>

  <div class="item">
    <div class="buttons">
      <span class="delete-button"></span>
      <span class="like-button"></span>
    </div>

    <div class="item-image">
      <img src="../docs/confirmation-page.jpg" alt="" />
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
      <div class="buttons">
        <span class="delete-button"></span>
        <span class="like-button"></span>
      </div>

      <div class="item-image">
        <img src="../docs/friends.jpg" alt="" />
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
        <div class="buttons">
          <span class="delete-button"></span>
          <span class="like-button"></span>
        </div>

        <div class="item-image">
          <img src="../docs/sassyglasses.jpg" alt="" />
        </div>

        <div class="item-description">
          <span>Product 3</span>
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
        <div class="total-price">$653</div>
      </div>

</div>


<a href="./Checkout" class="checkout-button">Proceed to Checkout</a>
</main>`;
