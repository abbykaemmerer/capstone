export default (state) => `      <main>
<img
  src="${state.image}"
  width="600"
  class="cat-header"
  />
<div class="page-grid-container">
<h1>${state.subtitle}</h1>
    <div class="description">This is the page that will display all the cat conditions</div>
</section>
    <div class="links">
      <div id='conditions1'>
      <a href="/dog-obesity.html">Obesity</a>
      <a href="/dog-skin.html">Poor Skin & Coat Condition</a>
      <a href="/dog-pancreatitis.html">Pancreatitis</a>
      </div>
      <div id= 'conditions2'>
      <a href="/dog-diabetes.html">Diabetes</a>
      <a href="/dog-preg.html">Pregnancy</a>
      </div>
    </div>
    <div class="pictures">
      <img src="/docs/DogSmall1.jpg" alt="" height="400" width="500">
      <img src="/docs/DogSmall2.jpg" alt="" height="400" width="500">
      <img src="/docs/DogSmall3.jpg" alt="" height="400" width="500">
    </div>
  </div>
</main>`;
