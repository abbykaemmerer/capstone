export default (state) => `      <main>
<div class="page-grid-container">

    <div class="description"> <h1>${state.subtitle}</h1><p>Essential tips for raising a healthy dog:
    <ul>
      <li>The BASICS: food, water, exercise</li>
      <li>A high quality diet has an innumerable amount of positive health benefits for dogs- healthy skin, shiny coat, bright eyes, strong immune system</li>
      <li>Exercise! Not only is it fun for your pet, but dogs that are overweight are at a much higher risk for disease and health problems than those at a healthy weight</li>
      <li>If it's too hot/cold for you to be outside barefoot, it is for them too </li>
      <li>Brush their teeth- they probably won't like it but they won't like losing teeth either</li>
    </ul>
    If you think your dog might have needs beyond the scope of our essential tips, check below for common illnesses and conditions that affect the health of many dogs.

  </p></div>
    <div class="links">
      <div id='conditions1'>
      <a href="./Dogobesity">Obesity</a>
      <a href="./Skin">Poor Skin & Coat Condition</a>
      <a href="./Pancreatitis">Pancreatitis</a>
      </div>
      <div id= 'conditions2'>
      <a href="./Dogdiabetes">Diabetes</a>
      <a href="./Dogpreg">Pregnancy</a>
      </div>
    </div>
    <div class="pictures">
    <img src="${state.image1}" alt="">
    <img src="${state.image2}" alt="">
    <img src="${state.image3}".jpg" alt="">
    </div>
  </div>
</main>`;
