import { generateCardHTML } from '../../lib';

export default (state) => `
<main>
<div class="condition-grid-container">
    <div class="condition-description">
        <h1>${state.subtitle}</h1>
        <p> Lower urinary tract disease is a common disease diagnosed in cats. Bladder stones, bladder infections, urethral obstruction and interstitial cystitis are all potential causes of this disease.
        <ul>Symptoms:
            <li> Not using the litter box </li>
            <li> Difficulty urinating </li>
            <li> Lack of appetite </li>
            <li> Irritability </li>
        </ul>
        <ul>Health Risks:
            <li> Inability to urinate </li>
            <li> Vomiting </li>
            <li> Depression </li>
        </ul>
        </p>
    </div>

    <div class="condition-products">
        <h2>Recommended products:</h2>
    <div class="products">

    ${generateCardHTML(state.products)}
    </div>
    </div>
</div>
</main>`;

{ /* <div class="card" id="prod-1">
<div class="prodImg">
<img src= "${state.prod-1.image}" alt="" height=300>
</div>
<div class="prodName">
${state.prod-1.name}
</div>
<div class="prodDescrip">
${state.prod-1.description}
</div>
<div class="prodPrice">
${state.prod-1.price}
</div>
<div class="prodButton">
<button>Add to Cart</button>
</div>
</div>

<div class="card" id="prod-2">
<div class="prodImg">
<img src= "${state.prod-2.image}" alt="" height=300>
</div>
<div class="prodName">
${state.prod-2.name}
</div>
<div class="prodDescrip">
${state.prod-2.description}
</div>
<div class="prodPrice">
${state.prod-2.price}
</div>
<div class="prodButton">
<button>Add to Cart</button>
</div>
</div>

    <div class="card" id="prod-3">
<div class="prodImg">
<img src= "${state.prod-3.image}" alt="" height=300>
</div>
<div class="prodName">
${state.prod-3.name}
</div>
<div class="prodDescrip">
${state.prod-3.description}
</div>
<div class="prodPrice">
${state.prod-3.price}
</div>
<div class="prodButton">
<button>Add to Cart</button>
</div>
</div> */ }
