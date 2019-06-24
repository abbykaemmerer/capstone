function generateCardHTML(products){
    products.map((product,i) => {
        `<div class="card" id="prod-${i + 1}">
        <div class="prodImg">
        <img src= "${product.image}" alt="" height=300>
        </div>
        <div class="prodName">
        ${product.name}
        </div>
        <div class="prodDescrip">
        ${product.description}
        </div>
        <div class="prodPrice">
        ${product.price}
        </div>
        <div id="prodButton">
        <button>Add to Cart</button>
        </div>
    </div>`;
    }).join(' ');
}

generateCardHTML();

export default (state) => `
<main>
<div class="condition-grid-container">
    <div class="condition-description">
        <h1>${state.subtitle}</h1>
        <p> Obesity is a nutritional disease which occurs when a dogs has an excess of body fat.
        <ul>Symptoms:
            <li> Weight gain </li>
            <li> Inability/unwilling to exercise </li>
            <li> Above-ideal score in a body condition assessment </li>
        </ul>
        <ul>Health Risks:
            <li> Reduced lifespan </li>
            <li> Difficulty breathing </li>
            <li> Liver disease </li>
            <li> Hypertension </li>
        </ul>
        </p>
    </div>

    <div class="condition-products">
        <h2>Recommended products:</h2>
    <div class="products">


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
