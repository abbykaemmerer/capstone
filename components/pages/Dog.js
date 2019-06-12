export default (state) => `      <main>
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
    <img src="${state.image1}" alt="" height="410" width="480">
    <img src="${state.image2}" alt="" height="410" width="480">
    <img src="${state.image3}".jpg" alt="" height="410" width="480">
    </div>
  </div>
</main>`;
