export default (state) => `    <main>
<div class="page-grid-container">
<h1>${state.subtitle}</h1>
    <div class="description">This paragraph will details cat conditions and best practices.</div>
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
