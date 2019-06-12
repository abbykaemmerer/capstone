export default (state) => `    <main>
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
      <a href="/cat-obesity.html">Obesity</a>
      <a href="/cat-diabetes.html">Diabetes</a>
      <a href="/cat-ut.html">Urinary Tract</a>
      </div>
      <div id= 'conditions2'>
      <a href="/cat-hairballs.html">Hair Balls</a>
      <a href="/cat-preg.html">Pregnancy</a>
      </div>
    </div>
    <div class="pictures">
      <img src="/docs/CatSmall1.jpg" alt="" height="400" width="500">
      <img src="/docs/CatSmall2.jpg" alt="" height="400" width="500">
      <img src="/docs/CatSmall3.jpg" alt="" height="400" width="500">
    </div>
  </div>
</main>`;