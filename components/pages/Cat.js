export default (state) => `    <main>
<div class="page-grid-container">
<h1>${state.subtitle}</h1>
    <div class="description"> <p>Essential tips for raising a healthy cat:
    <ul>
      <li>The BASICS: food, water, a litter box</li>
      <li>Cats are naturally playful- toys, catnip, and windows are all great enrichment</li>
      <li>Cats will overeat if given the opportunity, feed them an appropriate amount</li>
      <li>A diet consisting of dry AND wet food is recommended by most veterinarians </li>
      <li>Cleanliness is very important to cats- they're weird- their food bowls, litter boxes, water all must be clean</li>
    </ul>
    If you think your cat might have needs beyond the scope of our essential tips, check below for common illnesses and conditions that affect the health of many cats.

  </p></div>
    <div class="links">
      <div id='conditions1'>
      <a href="./ObesityCat">Obesity</a>
      <a href="./Diabetescat">Diabetes</a>
      <a href="./Ut">Urinary Tract</a>
      </div>
      <div id= 'conditions2'>
      <a href="./Hairballs">Hair Balls</a>
      <a href="./Pregcat">Pregnancy</a>
      </div>
    </div>
    <div class="pictures">
      <img src="${state.image1}" alt="" height="410" width="480">
      <img src="${state.image2}" alt="" height="410" width="480">
      <img src="${state.image3}".jpg" alt="" height="410" width="480">
    </div>
  </div>
</main>`;
