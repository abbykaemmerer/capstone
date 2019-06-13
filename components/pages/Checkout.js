export default () => ` <main>
<div class="grid-container">
  <div class="order-summary">Order Summary</div>

  <form action="https://formspree.io/kaemmerer.abby@gmail.com" method="POST" class="container" id="order-form" >

  <div class="name">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name">
  </div>
  <div>
    <label for="email">Email:</label>
    <input type="email" name="userEmail" id="user-email" placeholder="user@example.com"/>
  </div>
  <div class="card"></div>
  <label for="credit-card">Credit Card:</label>
  <input type="number" name="card" id="card">
  <div class="address"></div>
  <label for="address">Billing Address:</label>
  <input type="text" name="Address" id="address">
  <div class="marketing">
      <label for="marketing">How did you hear about us?</label>
      <select name="marketing" id="marketing">
        <optgroup label="Online">
          <option value="social">Social Media (FB, Twitter, LinkedIn)</option>
          <option value="github">Online Portfolio (GitHub)</option>
          <option value="search">Search Engine</option>
          <option value="email">Email</option>
        </optgroup>
        <optgroup label="In-Person">
          <option value="networking">We met at a networking event</option>
          <option value="referral">Personal referral</option>
          <option value="random">We met somewhere else</option>
        </optgroup>
        <option value="other">Other</option>
      </select>
    </div>
    <div class="submit">
        <input type="submit" value="Checkout!" />
        <input type="reset" value="Clear Form" />
      </div>
</div>

</main>`;
