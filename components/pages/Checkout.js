export default () => `     <main>
<div class="row">
  <div class="col-75">
    <div class="checkout-container">
        <form action="https://formspree.io/kaemmerer.abby@gmail.com" method="POST" class="container" id="order-form" >
          <div class="row">
            <div class="col-50">
              <h3 class="form-headers">Billing Address</h3>
              <label for="fname"> Full Name</label>
              <input type="text" name="firstname" id="fname" placeholder="Jon Snow">
              <label for="email"> Email</label>
              <input type="text" name="email" id="email" placeholder="kinginthenorth@gmail.com">
              <label for="address"> Address</label>
              <input type="text" name="address" id="address" placeholder="777 N. The Wall Ave.">
              <label for="city"> City</label>
              <input type="text" name="city" id="city" placeholder="Northest North">

              <div class="row">
                <div class="col-50">
                  <label for="state"> State</label>
                  <input type="text" name="state" id="state" placeholder="TW">
                </div>
                <div class="col-50">
                  <label for="zip"> Zip Code</label>
                  <input type="text" name="zip" id="zip" placeholder="000001">
                </div>
              </div>
            </div>
            <div class="col-50">
              <h3 class="form-headers">Payment</h3>
              <label for="fname"> Accepted Cards</label>
              <div class="icon-container">
                <i class="fa fa-cc-visa" style="color:navy"></i>
                <i class="fa fa-cc-mastercard" style="color:red;"></i>
                <i class="fa fa-cc-discover" style="color:orange;"></i>
              </div>
              <label for="cname"> Name </label>
              <input type="text" name="cname" id="cname" placeholder="Aegon Targaryen">
              <label for="ccnum"> Credit Card Number</label>
              <input type="text" name="cardnumber" id="cardnumber" placeholder="1111-2222-3333-4444">
              <label for="expmonth"> Expiration Month</label>
              <input type="text" name="expmonth" id="expmonth" placeholder="July">
              <div class="row">
                <div class= "col-50">
                  <label for="expyear"> Expiration Year</label>
                  <input type="text" name="expyear" id="expyear" placeholder="1040">
                </div>
                <div class="col-50">
                  <label for="cvv"> CVV</label>
                  <input type="text" name="cvv" id="cvv" placeholder="234">
                </div>
              </div>
            </div>

          </div>
          <label>
            <input type="checkbox" name="checked" id="sameaddress"> Shipping address same as billing
          </label>
          <input type="submit" value="Submit Order" class="btn">
        </form>
    </div>
  </div>

  <div class="col-25">
    <div class="sum-container">
      <h4>Cart
        <span class="price" style="color:black">
          <i class="fa fa-shopping-cart"></i>
          <b>4</b>
        </span>
      </h4>
      <p><a href="#">Product 1</a> <span class="price">$10</span></p>
      <p><a href="#">Product 2</a> <span class="price">$10</span></p>
      <p><a href="#">Product 3</a> <span class="price">$10</span></p>
      <p><a href="#">Product 4</a> <span class="price">$10</span></p>
      <hr>
      <p>Total <span class="price" style="color:black"><b>$40</b></span></p>
    </div>
  </div>
</div>

</main>`;
