function generateCardHTML(products){
    return products.map((product,i) => {
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
        <div class="prodButton">
        <button>Add to Cart</button>
        </div>
    </div>`
    ).join(' ');
}

export default (state) =>
    `
<main>
<div class="condition-grid-container">
    <div class="condition-description">
        <h1>${state.subtitle}</h1>
            <p> The inability to produce insulin to balance blood sugar is an increasing concern among cats.
            <ul>Symptoms:
                <li> Increased thirst </li>
                <li> Increased appetite </li>
                <li> Vomiting </li>
                <li> Dehydration </li>
            </ul>
            <ul>Health Risks:
                <li> Severe depression </li>
                <li> Decreased motor functions </li>
                <li> Coma </li>
                <li> Death</li>
            </ul>
            </p>
    </div>


    <div class="condition-products">
        <h2>Recommended products:</h2>
    <div class="products">
    ${generateCardHTML(state.products)};
    ${console.log(state)};
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
