import { generateCardHTML } from '../../lib';

export default (state) => `
<main>
<div class="condition-grid-container">
    <div class="condition-description">
        <h1>${state.subtitle}</h1>
        <p> Kittens! Cat pregnancy typically lasts around 63-67 days and then- kittens!!
        <ul>Symptoms:
            <li> Vomiting </li>
            <li> Swollen tummy </li>
            <li> Weight gain </li>
            <li> Attention-seeking </li>
        </ul>
        </p>
    </div>

    <div class="condition-products">
        <h2>Recommended products:</h2>
    <div class="products">
    ${generateCardHTML(state.products)}

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
</div>
</div> */ }
