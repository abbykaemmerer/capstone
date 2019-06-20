export default (state) => `
<main>
<div class="condition-grid-container">
    <div class="condition-description">
        <h1>${state.subtitle}</h1>
        <p> Obesity is a nutritional disease is defined by an excess of body fat.
        <ul>Symptoms:
            <li> Weight gain </li>
            <li> Excess body fat </li>
            <li> Inability/unwilling to exercise </li>
            <li> Above-ideal score in a body condition assessment </li>
        </ul>
        <ul>Health Risks:
            <li> Reduced lifespan</li>
            <li> Difficulty breathing </li>
            <li> Liver disease </li>
            <li> Diabetes </li>
        </ul>
        </p>
    </div>

    <div class="condition-products">
        <h2>Recommended products:</h2>
    <div class="products">

        <div class="card">
            <div class="prodImg">
            ${state.productOne.image}
            </div>
            <div class="prodName">
            ${state.productOne.name}
            </div>
            <div class="prodDescrip">
            ${state.productOne.description}
            </div>
            <div class="prodPrice">
            ${state.productOne.price}
            </div>
            <div class="prodButton">
            <button>Add to Cart</button>
            </div>
        </div>

        <div class="card">
            <div class="prodImg">
            ${state.productTwo.image}
            </div>
            <div class="prodName">
            ${state.productTwo.name}
            </div>
            <div class="prodDescrip">
            ${state.productTwo.description}
            </div>
            <div class="prodPrice">
            ${state.productTwo.price}
            </div>
            <div class="prodButton">
            <button>Add to Cart</button>
            </div>
        </div>

        <div class="card">
            <div class="prodImg">
            ${state.productThree.image}
            </div>
            <div class="prodName">
            ${state.productThree.name}
            </div>
            <div class="prodDescrip">
            ${state.productThree.description}
            </div>
            <div class="prodPrice">
            ${state.productThree.price}
            </div>
            <div class="prodButton">
            <button>Add to Cart</button>
            </div>
        </div>
    </div>
    </div>
</div>
</main>`;

