export default (state) => `    <main>
<div class="page-grid-container">
  <div class="description">
    <h1>${state.subtitle}</h1>
      <p>Essential tips for raising a healthy cat:
      <ul>
          <li>The BASICS: food, water, a litter box</li>
          <li>Cats are naturally playful- toys, catnip, and windows are all great enrichment</li>
          <li>Cats will overeat if given the opportunity, feed them an appropriate amount</li>
          <li>A diet consisting of dry AND wet food is recommended by most veterinarians </li>
          <li>Cleanliness is very important to cats- they're weird- their food bowls, litter boxes, water all must be clean</li>
      </ul>
      If you think your cat might have needs beyond the scope of our essential tips, check below for common illnesses and conditions that affect the health of many cats.
      </p>
  </div>



    <div class="links">
    <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
    <button type="submit" class="btn btn-secondary"><a href="./ObesityCat">Obesity</a></button>
    <button type="button" class="btn btn-secondary"><a href="./Diabetescat">Diabetes</a></button>
    <button type="button" class="btn btn-secondary"><a href="./Ut">Urinary Tract Disease</a></button>
    <button type="button" class="btn btn-secondary"><a href="./Hairballs">Hair Balls</a></button>
    <button type="button" class="btn btn-secondary"><a href="./Pregcat">Pregnancy</a></button>
  </div>
    </div>
    <div class="pictures">
      <img src="${state.image1}" alt="">
      <img src="${state.image2}" alt="">
      <img src="${state.image3}".jpg" alt="">
    </div>
</div>
</main>`;


{ /* <div id='conditions1'>
<a href="./ObesityCat">Obesity</a>
<a href="./Diabetescat">Diabetes</a>
<a href="./Ut">Urinary Tract</a>
</div>
<div id= 'conditions2'>
<a href="./Hairballs">Hair Balls</a>
<a href="./Pregcat">Pregnancy</a>
</div> */ }
